import React from "react";
import TopOff from "./Topoff.module.css";
import Trd from "../UI/Trd/Trd";
import HomeRoute from "../UI/homeRoute/homeRoute";
import MoreFam from "../moreFamily/moreFamily";
const Topoff = (props) => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&display=swap"
        rel="stylesheet"
      ></link>
      <h2 className={TopOff["h2"]}>Top Deals For Families</h2>
      <Trd>
        <img
          className={TopOff["shf"]}
          src="data:image/png;base64,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"
          alt="see"
        ></img>
        <p className={TopOff["par"]}>
          Get ready for summer holidays !! Buy two tickets only for $300 for
          <article className={TopOff["my-h1"]}> "Singapore" </article> and get 1
          ticket free. Get exciting
          <article className={TopOff["my-h1"]}> cashbacks and rewards </article>{" "}
          on spending $350 on our webiste{" "}
          <article style={{ color: "darkred" }} className={TopOff["my-h1"]}>
            "Touristivity" .
          </article>
          <article className={TopOff["my-h1"]}>
            Don't miss .Deal valid till Monday!!
          </article>
        </p>
      </Trd>
      <HomeRoute onClick={props.onClick} dis={props.dis} path="/family/morefamily">
          <MoreFam/>
        </HomeRoute>
    </React.Fragment>
  );
};

export default Topoff;
