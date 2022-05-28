import Pro from "./Profile.module.css";
import Sec from "../UI/Sec/Sec";
const Profile=()=>{
    const mail=localStorage.getItem("email");
    const pass=localStorage.getItem("pass");
    return (
        <form className={Pro["form"]}>
            <h2 style={{textAlign:"center",fontFamily:"sans-serif"}}>Your Profile</h2>
            <hr></hr>
            <Sec color="black">mail : {mail}</Sec>
            <hr></hr>
            <Sec color="black">password : {pass}</Sec>
            <hr></hr>
            <Sec color="black">Address : Thiruvananthapuram ,Tamilnadu ,India ,abcd</Sec>
            <hr></hr>
            <Sec color="black">Previous Journeys : {"Shimla"}</Sec>
        </form>
    );
}

export default Profile;