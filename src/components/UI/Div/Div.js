import Cntin from "./Div.module.css";
const Div = (props) => {
  return <div style={{width:props.width,height:props.height}} className={`${Cntin["re-div"]} ${props.className}`}>{props.children}</div>;
};

export default Div;
