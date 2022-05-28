import Section from "./Sec.module.css";
const Sec=(props)=>{
    return (<p 
        style={{color:props.color,width:props.width,height:props.height}} 
        className={`${props.className} ${Section["dec"]}`}>{props.children}</p>);
}

export default Sec;