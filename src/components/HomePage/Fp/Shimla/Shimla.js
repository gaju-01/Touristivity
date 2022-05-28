import Sec from "../../../UI/Sec/Sec";
import Cd from "../../../UI/Cd/Cd";
import useCounter from "../../../Counter/useCounter";
import useFetch from "../../../use-fetch/useFetch";
import Button from "../../../UI/Button/Button";
import {useEffect} from "react";
import useCart from "../../../use-cart/useCart";
import Price from "../../../UI/Price/Price";
const Shimla = (props) => {
  const [hr,min,sec]=useCounter({"hr":0,"min":56,"sec":56});
  const {err,title,image,content,single,execute}=useFetch();
  const {backend}=useCart();
  const addCart=()=>{
    backend({url_get:"https://webproject-backend-default-rtdb.firebaseio.com/cart.json/",
            url_put:"https://webproject-backend-default-rtdb.firebaseio.com/cart.json/"},
            {title:title,image:image,single:single});
  }
  useEffect(()=>{
    execute({url:"https://webproject-backend-default-rtdb.firebaseio.com/HimachalPradesh/Shimla.json"});
  },[execute]);
  return (
    <div>
      <img
        alt="err"
        src={image}
      />
      <br></br>
      {err.trim()!=="" && <p>{err}</p>}
      <p className={props.className}>
        <Sec color="black">{title}</Sec>
        {content}
      </p>
      <Price single={single}/>
      <Cd hr={hr} min={min} sec={sec}></Cd>
      <Button onClick={addCart} className="knk" type="submit" title="Add"></Button>
    </div>
  );
};

export default Shimla;
