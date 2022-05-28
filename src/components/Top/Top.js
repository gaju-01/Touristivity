import React, { useEffect } from "react";
import Rec from "./Top.module.css";
import useVideo from "../use-video/useVideo";
const Top = () => {
  const {
    err: err1,
    video: video1,
    fetch_video: f_video1,
  } = useVideo();
  const {
    err: err2,
    video: video2,
    fetch_video: f_video2,
  } = useVideo();
  const {
    err:err3,
    video:video3,
    fetch_video:f_video3
  }=useVideo();
  useEffect(() => {
    f_video1({
      url: "https://webproject-backend-default-rtdb.firebaseio.com/Mumbai/Mumbai.json",
    });
    f_video2({
      url: "https://webproject-backend-default-rtdb.firebaseio.com/Singapore/Singapore.json",
    });
    f_video3({
      url: "https://webproject-backend-default-rtdb.firebaseio.com/WestBengal/Darjeeling.json",
    });
  }, [f_video1,f_video2,f_video3]);

  return (
    <React.Fragment>
      <h2>Recommened For You</h2>
      <div className={Rec["par"]}>
        {err1 !== "" && <p>{err1}</p>}
        <div>
          <iframe
            src={video1}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {err2 !== "" && <p>{err2}</p>}
        <div>
          <iframe
            width="560"
            height="315"
            src={video2}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {err3 !== "" && <p>{err3}</p>}
        <div>
          <iframe
            width="560"
            height="315"
            src={video3}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Top;
