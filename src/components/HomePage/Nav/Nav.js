import React,{useEffect, useState} from "react";
import Homestyles from "./Nav.module.css";
import Button from "../../UI/Button/Button";
import {useDispatch} from "react-redux";
import {actions} from "../../store/store";
import {Link} from "react-router-dom";
const Nav = () => {
  const dispatch=useDispatch();
  const [isDis,setIsDis]=useState(true);
  useEffect(()=>{
    if (localStorage.getItem("dis")==="1"){
      setIsDis(false);
    }
  },[]);
  const clickHandler=()=>{
    localStorage.setItem("dis","1");
    setIsDis(false);
  };
  const logoutHandler=()=>{
    localStorage.setItem('v1','0');
    localStorage.removeItem("dis");
    dispatch(actions.logout());
  }
  return (
    <React.Fragment>
      <div className={Homestyles["home"]}>
        <div>
          <Link className={Homestyles["link"]} to="/home/HomePage">Home</Link>
          <Link className={Homestyles["link"]} to="/home/Logout">Logout</Link>
          <Link className={Homestyles["link"]} to="/home/Signout">Signout</Link>
          <Link className={Homestyles["link"]} to="/home/Profile">Profile</Link>
          <Link className={Homestyles["link"]} to="/home/Cart">Cart</Link>
        </div>
        <div className={Homestyles["unique_one"]}>
          <Button
            height="27px"
            width="70px"
            color="white"
            back="rgb(168,121,19)"
            font="12px"
            onClick={logoutHandler}
            type="submit"
            title="Logout"
            disable={false}
          />
        </div>
      </div>
      <div style={{backgroundColor:"orange",width:"76rem",height:"8px"}}></div>
      {isDis && <div className={Homestyles["cookies"]}>
          <p>We use cookies to store your information and ensure you the security and also provide the good experience</p>
          <button onClick={clickHandler}>Got it</button>
      </div>}
    </React.Fragment>
  );
};

export default Nav;
