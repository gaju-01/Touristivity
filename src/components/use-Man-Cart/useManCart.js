import { useCallback, useState } from "react"

const useManCart=(setTot_Quan, setTot_Price,setCartlist,setErr)=>{
    const man_fun=useCallback(async (config,details)=>{
        try{
        const response=await fetch(config.url);
        if(!response.ok){
            throw new Error();
        }
        const data=await response.json();
         let tot_quan=data.tot_quan;
         let tot_price=data.tot_price;
         let cart_list=data.cart_list;
         console.log(data.tot_quan);
         for(const key in cart_list){
             const title=cart_list[key].title;
             if(title===details.title){
                 tot_quan=tot_quan-cart_list[key].quantity+details.quantity;
                 tot_price=tot_price-cart_list[key].price+cart_list[key].single*details.quantity;
                 cart_list[key].quantity=details.quantity;
                 cart_list[key].price=cart_list[key].single*details.quantity;
                 break;
             }
         }
         const reponse_back=await fetch(config.url,{
             method:"PUT",
             body:JSON.stringify({cart_list:cart_list,tot_price:tot_price,tot_quan:tot_quan}),
             headers:{"Content-type":"application/json"}

         });
         setCartlist(cart_list);
         setTot_Quan(tot_quan);
         setTot_Price(tot_price);
         if(!reponse_back.ok){
             throw new Error();
         }
        }catch(error){
            setErr("Something went wrong!!");
        }
    },[]);
    return {man_fun};
}

export default useManCart;