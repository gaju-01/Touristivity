import Dis from "./Fp.module.css";
import Taj from "./Taj/Taj";
import Shimla from "./Shimla/Shimla";
import Kashmir from "./Kashmir/Kashmir";
import Aa from "./Aa/Aa";
import Dar from "./Dar/Dar";
import Goa from "./Goa/Goa";
import Gok from "./Gok/Gok";
import Jog from "./Jog/Jog";
import React from "react";
import HomeRoute from "../../UI/homeRoute/homeRoute";
import MoreFp from "../../moreFp/moreFp";
import "../../gen.css";
const Fp = (props) => {
  return (
    <React.Fragment>
      <h2>Top Places To Visit With Deals (Ends In)</h2>
      <div className={Dis["par"]}>
        <Taj className="ps"/>
        <Shimla className="ps"/>
        <Kashmir className="ps"/>
        <Aa className="ps"/>
        <Dar className="ps"/>
        <Goa className="ps"/>
        <Jog className="ps"/>
        <Gok className="ps"/>
        <HomeRoute path="/tp/moretp" dis={props.dis} onClick={props.onClick}>
          <MoreFp/>
        </HomeRoute>
      </div>
    </React.Fragment>
  );
};

export default Fp;
