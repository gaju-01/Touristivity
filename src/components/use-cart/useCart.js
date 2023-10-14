import { useState, useCallback } from "react";
const useCart = () => {
	const [err, setErr] = useState("");
	const [cart_listy, setCartList] = useState({
		title: "none",
		image: "",
		quantity: 0,
		price: 0,
		single: 0,
	});
	const backend = useCallback(async (config, details) => {
		try {
			const response = await fetch(config.url_get);
			if (!response.ok) {
				throw new Error("Something went wrong!!");
			}

			const data = await response.json();
			let tot_quan = data.tot_quan;
			tot_quan += 1;
			let tot_price = data.tot_price;
			const cart_list = data?.cart_list ? data.cart_list : {};
			let found = false;

			for (const key in cart_list) {
				const tit = cart_list[key].title;
				if (tit === details.title) {
					cart_list[key].price =
						cart_list[key].single * (cart_list[key].quantity + 1);
					tot_price += cart_list[key].single;
					cart_list[key].quantity += 1;
					found = true;
					break;
				}
			}
			if (!found) {
				const my_key = Object.keys(cart_list).length;
				tot_price += details.single;
				cart_list[my_key] = {
					image: details.image,
					single: details.single,
					title: details.title,
					price: details.single,
					quantity: 1,
				};
				if (cart_list[0].single === 0) {
					cart_list.splice(0, 1);
				}
			}
			setCartList(cart_list);
			try {
				const fetch_back = await fetch(config.url_put, {
					method: "PUT",
					body: JSON.stringify({
						tot_price: tot_price,
						tot_quan: tot_quan,
						cart_list: cart_list,
					}),
				});
				if (!fetch_back.ok) {
					throw new Error();
				}
			} catch (error) {
				setErr("Something went wrong!!");
			}
		} catch (error) {
			setErr("Something went wrong!!");
		}
	}, []);
	return { err, backend, cart_list: cart_listy };
};

export default useCart;
