import React from "react";
import RouteStyle from "./homeRoute.module.css";
import {Link,Route} from "react-router-dom";
const HomeRoute = (props) => {
    const c__H=()=>{
        props.onClick();
    }
    return (
        <React.Fragment>
            {props.dis && (
                <Link onClick={c__H} className={RouteStyle["Nav-Link"]} to={props.path}>
                {props.title?props.title: "More"}
                </Link>
            )}
            {!props.dis && (
                <Route to={props.path} exact>
                {props.children}
                <Link className={RouteStyle["Nav-Link"]} to="/">
                    Home Page
                </Link>
                </Route>
            )}
        </React.Fragment>
    );
};

export default HomeRoute;
