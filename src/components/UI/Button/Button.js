import classes from './Button.module.css';
const Button=(props)=>{
    return (
        <button style= {{height:props.height,width:props.width,color:props.color,backgroundColor:props.back,fontSize:props.font}} 
        id={props.id} className={`${props.className} ${classes["button_class"]}`} 
        type={props.type || "button"} 
        disabled={props.disable|| false} 
        onClick={props.onClick}>{props.title  || "No title"}</button>
    );
}

export default Button;