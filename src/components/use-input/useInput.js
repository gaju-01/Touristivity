import {useState} from 'react';
const useInput=(val)=>{
    const [name,setName] = useState("");
    const [touch,setTouch]=useState(false);
    const isValid=val(name);
    const com_valid=!isValid && touch;
    const setMyTouc=()=>{
        setTouch(true);
    }
    const setMyName=(my_name)=>{
        setName(my_name.target.value);
        setTouch(true);
    }
    const reset=()=>{
        setName("");
        setTouch(false);
    }
    return {name,isValid,com_valid,setMyTouc,setMyName,reset};
}

export default useInput;