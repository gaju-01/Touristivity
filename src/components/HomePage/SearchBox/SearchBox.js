import React,{useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {engine_actions} from "../../store/store";
import {Link} from "react-router-dom";
import Search from "./Search.module.css";
let place_list=["Agra","Aurangabad","Goa","Gokarna","HimachalPradesh","JammuAndKashmir","Mumbai","Singapore",
"Shivamogga","WestBengal"]
let more_place_list=["Egypt","Australia","Paris"];
const SearchBox=(props)=>{
    const [placeVal,setPlaceVal]=useState("");
    const [errState,setErrState]=useState(false);
    const [my_place,setMyPlace]=useState("");
    const [show,setShow]=useState(false);
    const dispatch=useDispatch();
    const chngHandler=(event)=>{
        setShow(false);
        setPlaceVal(event.target.value);
        setErrState(false);
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();
        const pre1=place_list.includes(placeVal);
        const pre2=more_place_list.includes(placeVal);
        if(pre1){
            localStorage.setItem("place",placeVal);
            setMyPlace(placeVal);
            setShow(true);
        }else if(pre2){
            const string="moreFp/"+placeVal;
            localStorage.setItem("place",string);
            setMyPlace(string);
            setShow(true);
        }else{
            setMyPlace("");
            setErrState(!(pre1 || pre2));
            localStorage.setItem("place","");
        }
        setPlaceVal("");
    }
    useEffect(()=>{
        const item=localStorage.getItem("place");
        setMyPlace(item);
        if(item){
        setShow(true);
        }
    },[]);
    useEffect(()=>{
        const exe=async ()=>{
            const url="https://webproject-backend-default-rtdb.firebaseio.com/"+my_place+".json/";
            const res=await fetch(url,{
                method:"GET",
                headers:{"Content-type":"application/json"},

            });
            const data=await res.json();
            dispatch(engine_actions.setData(data));
        }
        if(my_place){
            exe();
        }
            
    },[my_place,dispatch]);
    return (
        <React.Fragment>
            {errState && <p style={{color:"red"}}>Enter the valid place</p>}
            <div style={{marginBottom:"15px"}}>
                <form onSubmit={submitHandler}>
                    <input value={placeVal} onChange={chngHandler} type="text" id="place"></input>
                    <button className={props.className} type="submit">Submit</button>
                </form>
                {show && <Link className={Search["link"]} to="/searchPlace">Show Results</Link>}
            </div>
        </React.Fragment>
    );
}
export default SearchBox;