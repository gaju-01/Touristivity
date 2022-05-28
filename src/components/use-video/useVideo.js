import {useCallback, useState} from "react";
const useVideo=()=>{
    const [err,setErr]=useState("");
    const [video,setVideo]=useState("");
    const fetch_video=useCallback(async (config)=>{
        try{
        const response=await fetch(config.url,{
            method:config.method ? config.method:"GET",
            headers:config.headers?config.headers:{},
            body:config.body?config.body:null
        });
        if(!(response.ok)){
            throw new Error("Somthing went wrong!!");
        }
        setErr("");
        const data=await response.json();
        setVideo(data.video);
    }catch(error){
        setErr("Something went wrong!!Try again later please.");
    }
    },[]);
    return {err,video,fetch_video};
}

export default useVideo;