import React from "react";
import HomePage from "./Home.module.css";
import SearchBox from "../SearchBox/SearchBox";
import Footer from "../FooterSection/Footer";
import FamPlaces from "../Fp/FP";
import Button from "../../UI/Button/Button";
import Sec from "../../UI/Sec/Sec";
import Profile from "../../Profile/Profile";
import Des from "../Des/Des";
import Top from "../../Top/Top";
import Offers from "../../Offers/Offers";
import TopOff from "../../Topoff/Topoff";
import Cart from "../cart/Cart";
import { useDispatch } from "react-redux";
import { actions } from "../../store/store";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
const Home = (props) => {
  const dispatch = useDispatch();
  const [dis, setDis] = useState(true);
  const [dis1, setDis1] = useState(true);
  const disHandler = () => {
    setDis((prev) => !prev);
  };
  const disHandler1 = () => {
    setDis1((prev1) => !prev1);
  };
  const clickHandler = () => {
    localStorage.setItem("email", "");
    localStorage.setItem("pass", "");
    dispatch(actions.logout());
  };
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" exact>
          <div className={HomePage["searchclass"]}>
            <SearchBox className={HomePage["butto"]}></SearchBox>
            <Des></Des>
            <Top></Top>
            <Offers></Offers>
            <TopOff dis={dis1} onClick={disHandler1}></TopOff>
            <FamPlaces dis={dis} onClick={disHandler}></FamPlaces>
            <Footer></Footer>
          </div>
        </Route>
        <Route path="/home/HomePage">
          <div className={HomePage["searchclass"]}>
            <SearchBox className={HomePage["butto"]}></SearchBox>
            <Des></Des>
            <Top></Top>
            <Offers></Offers>
            <TopOff dis={dis1} onClick={disHandler1}></TopOff>
            <FamPlaces dis={dis} onClick={disHandler}></FamPlaces>
            <Footer></Footer>
          </div>
        </Route>
        <Route path="/home/Logout">
          <Button
            className={HomePage["log"]}
            onClick={clickHandler}
            title="Logout"
            disable={false}
            type="submit"
          ></Button>
        </Route>
        <Route path="/home/Signout">
          <React.Fragment>
            <Sec color="darkred">
              Warning : By signing out you will delete your account!!!!!
            </Sec>
            <Button
              className={HomePage["log"]}
              onClick={clickHandler}
              title="Signout"
              disable={false}
              type="submit"
            ></Button>
          </React.Fragment>
        </Route>
        <Route path="/home/Profile">
          <Profile/>
        </Route>
        <Route path="/home/Cart">
          <Cart />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Home;
