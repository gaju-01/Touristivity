import {useState} from 'react';
import "./Des.css";
import Sec from  "../../UI/Sec/Sec";
import Button from "../../UI/Button/Button";
const Des=()=>{
    const [hit,setHit]=useState(false);
    const [height,setHeight]=useState("240px");
    const clickHandler=()=>{
        setHit((prev)=>{return !prev});
        setHeight((prev)=>{return prev==="240px"?"390px":"240px"});
    }
    return (
        <div style={{height:height}} className="des-class">
            <Sec className="para" color="black">Community</Sec>
            <ul>
                <li>This website enjoys the wide range of Community.</li>
                <li>This company is spread over different countries of the world like <b><i>
                    India , France , America , Germany , Switzerland , NewYork , NewZealand.</i></b></li>
                <li>This website enjoys wide range of community support over various different countries in the world</li>
                <li>You will get the instant solution to your doubts due to the <b><i>wide and repsonsive community</i></b>.</li>
                <li>This website is started in <b>2021</b> and is been running smooth at the present time.We need you to keep
                    supporting our website like this to ensure the growth of everyone.
                </li>
                <li>This website mainly focuses on developing creativity of the user and make the person understand
                    the importance of tourism and also try to provoke tourism in a person's heart.
                </li>
                </ul>
                {hit && <ul>
                <li>Website provides with allround information about the most of the famous tourist places in this world
                    making the user to gain the knowledge about the different places and can also see the experience of the
                    other people in that place. 
                </li>
                <li>
                    The website is constantly being updated from time to time .So in case of queries mail <b><i>gajanan
                        chegde01@gmail.com</i></b> or whatsapp <b><i>+91 8431252681</i></b> 
                </li>
                <li>You can also share the experience of your tour ans also can upload the photos and videos ,in case if you like this
                    website so that other users can also be benifted by your videos and phtots
                </li>
                <li>This website provides you with the all round information about the tourist places of world and 
                    you can make the every preparation that you need for this trip with the help of this website.
                </li>
                </ul>}
                <br></br>
                <Button onClick={clickHandler} color="black" back="white" height="25px" width="80px" title={!hit?"more":"less"}></Button>
        </div>
    );
}

export default Des;