import { useSelector, useDispatch } from "react-redux";
import "../gen.css";
import Sec from "../UI/Sec/Sec";
import Cd from "../UI/Cd/Cd";
import Button from "../UI/Button/Button";
import useCounter from "../Counter/useCounter";
import useCart from "../use-cart/useCart";
import { engine_actions } from "../store/store";
import React, { useEffect } from "react";
import Search from "./Search.module.css";
import Price from "../UI/Price/Price";
const SearchPlace = () => {
  const data = useSelector((state) => state.engine.data);
  const [hr1, min1, sec1] = useCounter({ hr: 21, min: 45, sec: 1 });
  const { backend } = useCart();
  const dispatch = useDispatch();
  let keys = [];
  for (const key in data) {
    keys.push(key);
  }
  useEffect(() => {
    const exe = async () => {
      const my_place = localStorage.getItem("place");
      const url =
        "https://webproject-backend-default-rtdb.firebaseio.com/" +
        my_place +
        ".json/";
      const res = await fetch(url, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const data = await res.json();
      dispatch(engine_actions.setData(data));
    };
    if (localStorage.getItem("place")) {
      exe();
    }
  }, [dispatch]);
  console.log(data[keys[0]].moreImages);
  const addCart = (event) => {
    const my_id = event.target.id;
    if (my_id) {
      const title = data[my_id].title;
      const single = data[my_id].single;
      const image = data[my_id].image;
      backend(
        {
          url_get:
            "https://webproject-backend-default-rtdb.firebaseio.com/cart.json/",
          url_put:
            "https://webproject-backend-default-rtdb.firebaseio.com/cart.json/",
        },
        { title: title, image: image, single: single }
      );
    }
  };
  const moreImages = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
    "img6",
    "img7",
    "img8",
  ];
  return (
    <React.Fragment>
      {keys.map((key) => {
        return (
          <div className={Search["div-style"]} key={key}>
            <img
              className={Search["main-image"]}
              alt="err"
              src={data[key].image}
            />
            <br></br>
            <p className="ps">
              <Sec color="black">{data[key].title}</Sec>
            </p>
            {moreImages.map((img) => {
              return (
                <img
                  className={Search["img-class"]}
                  src={data[key].moreImages[img]}
                  alt="err"
                />
              );
            })}
            <p className="ps">{data[key].content}</p>
            <Price single={data[key].single} />

            <Cd hr={hr1} min={min1} sec={sec1}></Cd>
            <Button
              id={key}
              onClick={addCart}
              className="knk"
              type="submit"
              title="Add"
            ></Button>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default SearchPlace;
