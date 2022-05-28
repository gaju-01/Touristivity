import React,{useEffect,useState} from "react";
import Sec from "../UI/Sec/Sec";
import Cd from "../UI/Cd/Cd";
import useCounter from "../Counter/useCounter";
import Button from "../UI/Button/Button";
import useCart from "../use-cart/useCart";
import Price from "../UI/Price/Price";
import "../gen.css";
const MoreFp=()=>{
    const [err,setErr]=useState("");
    const [data_list,setDataList]=useState({k:{title:"",single:"",image:"",content:""}});
    let keys=[];
    const [hr1,min1,sec1]=useCounter({"hr":23,"min":0,"sec":10});
    const {backend}=useCart();
    useEffect(()=>{
        const fetch_moreFp= async ()=>{
            const response= await fetch("https://webproject-backend-default-rtdb.firebaseio.com/moreFp.json/");
            if(!response.ok){
                
                throw new Error();
            }
            const data=await response.json();
            const transformed_data={};
            for(const key in data){
                const my_data=data[key];
                for(const my_keys in my_data){
                    transformed_data[my_keys]=my_data[my_keys];
                }
            }
            setDataList(transformed_data);
        }
        fetch_moreFp().catch((error)=>{
            setErr("Something went wrong!!");
        });
        return;
    },[]);
    for(const key in data_list){
        keys.push(key);
    }
    const addCart=(event)=>{
        const id=event.target.id;
        if (id){
        const title=data_list[id].title;
        const image=data_list[id].image;
        const single=data_list[id].single;
        backend({url_get:"https://webproject-backend-default-rtdb.firebaseio.com/cart.json/",
                url_put:"https://webproject-backend-default-rtdb.firebaseio.com/cart.json/"},
                {title:title,image:image,single:single});
        }
    }
    return (
        <React.Fragment>
            {err!=="" && <p>Something went wrong!!</p>}
            {err==="" && keys.map((key)=>{return <div key={key}>
                <img
                    alt="err"
                    src={data_list[key].image}
                />
                <br></br>
                <p className="ps">
                    <Sec color="black">{data_list[key].title}</Sec>
                    {data_list[key].content}
                </p>
                <Price single={data_list[key].single}/>
                <Cd hr={hr1} min={min1} sec={sec1}></Cd>
                <Button  id={key} onClick={addCart} className="knk" type="submit" title="Add"></Button>
            </div>})}
        </React.Fragment>
    );
}

export default MoreFp;