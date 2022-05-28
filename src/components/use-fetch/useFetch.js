import {useState,useCallback} from "react";
const useFetch=()=>{
    const [err,setErr]=useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [single,setSingle]=useState(0);
    const execute=useCallback(async (config)=>{
        try{
            const response=await fetch(config.url,{
                  credentials: "same-origin"
            });
            if(!(response.ok)){
                throw new Error("Something went wrong!!");
            }
            const data=await response.json();
            setErr("");
            setTitle(data.title);
            setImage(data.image);
            setContent(data.content);
            setSingle(data.single);
        }catch(error){
            setErr("Something went wrong!! Please try again later.");
        }
    },[]);
    return {err,title,image,content,single,execute};
}

export default useFetch;