import Mf from "./moreFamily.module.css";
import {Link} from "react-router-dom";
import React from "react";
const moreFamily=()=>{
    return (
        <React.Fragment>
            <ul>
            <li>
                <Link className={Mf["para"]} to="kgjke">
                    Buy two tickets to Egypt and get the thrid free!!.
                </Link>
            </li>
            <li>
                <Link className={Mf["para"]} to="kgjke">
                    With family the experience and the memories you get from a trip is awesome.
                    So what are you waiting for get three tickets for the world famous Jof Falls 
                    at 50% of the orignial price.
                </Link>
            </li>
            <li>
                <Link className={Mf["para"]} to="kgjke">
                    Set the two destinations for your family and get the thrid trip at the 50% discount.
                    So pack your bag and move out of the house.Enjoy your vacations!!
                </Link>
            </li>
            <li>
            <Link className={Mf["para"]} to="kgjke">
                    For family only!!Loook at the best tourist destinations that you can visit with your family.
                    Because wiht family the joy you get is way more than you have expected.
            </Link>
            </li>
            </ul>
    </React.Fragment>);
}
export default moreFamily;