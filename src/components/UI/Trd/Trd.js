import Tr from "./Trd.module.css";
const Trd=(props)=>{
    return (<div className={`${Tr["fam"]} ${props.className}`}>
            {props.children}
    </div>);
}

export default Trd;