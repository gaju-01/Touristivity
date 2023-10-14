import cs from "./cart.module.css";
import React, { useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import useManCart from "../../use-Man-Cart/useManCart";
const Cart = () => {
	const [cart_list, setCartlist] = useState([
		{ title: "none", image: "", single: 0, price: 0, quantity: 0 },
	]);
	const [tot_quan, setTot_Quan] = useState(0);
	const [tot_price, setTot_Price] = useState(0);
	const [err, setErr] = useState("");
	const { man_fun } = useManCart(
		setTot_Quan,
		setTot_Price,
		setCartlist,
		setErr
	);
	useEffect(() => {
		const fetch_data = async () => {
			const res = await fetch(
				"https://webproject-backend-default-rtdb.firebaseio.com/cart.json/"
			);

			if (!res.ok) {
				throw new Error("Something went wrong!!");
			}
			const data = await res.json();
			setCartlist(data.cart_list);
			setTot_Quan(data.tot_quan);
			setTot_Price(data.tot_price);
			setErr("");
		};
		fetch_data();
	}, [tot_quan, tot_price]);
	const chngCart = (event) => {
		event.preventDefault();
		const form_id = event.target.id;
		const search = "input " + form_id;
		var value = document.getElementById(search).value;
		value = parseInt(value);
		man_fun(
			{
				url: "https://webproject-backend-default-rtdb.firebaseio.com/cart.json/",
			},
			{ title: form_id, quantity: value }
		);
	};
	console.log(tot_quan, tot_price);
	return (
		<React.Fragment>
			<div className={cs["cart-par"]}>
				{err !== "" && (
					<p className={cs["err"]} style={{ fontSize: "30px" }}>
						{err}
					</p>
				)}
				{err === "" &&
					cart_list &&
					cart_list != null &&
					cart_list.map((data) => {
						return (
							<React.Fragment>
								{data.image && (
									<div key={data.title}>
										<img src={data.image} alt="err" />
										<h2>{data.title}</h2>
										<form id={data.title} onSubmit={chngCart}>
											<input
												className={cs["input-class"]}
												id={`input ${data.title}`}
												type="number"
												min="0"
											/>
											<Button
												className={cs["button-class"]}
												title="Submit"
												type="submit"
											/>
										</form>
										<p>Quantity : {data.quantity}</p>
										<p>Price : {data.price}</p>
										<p>Per Head: {data.single}</p>
									</div>
								)}
							</React.Fragment>
						);
					})}
			</div>
		</React.Fragment>
	);
};

export default Cart;
