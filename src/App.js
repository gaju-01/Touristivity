import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm/Loginform";
import Home from "./components/HomePage/Home/Home";
import Par from "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../src/components/store/store";
import Top from "../src/components/Top/Top";
import Fp from "../src/components/HomePage/Fp/FP";
import Topoff from "../src/components/Topoff/Topoff";
import Nav from "../src/components/HomePage/Nav/Nav";
import { Switch, Route, Redirect } from "react-router-dom";
import SearchPlace from "../src/components/renderSearch/SearchPlace";
import "./App.css";
const App = () => {
  const login = useSelector((state) => state.login.login);
  const pswrd = useSelector((state) => state.login.pswrd);
  const email = useSelector((state) => state.login.email);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("v1") === "1") {
      const my_mail = localStorage.getItem("email");
      const my_pass = localStorage.getItem("pass");
      dispatch(actions.login({ email: my_mail, pswrd: my_pass }));
    }
  }, [dispatch]);
  return (
    <React.Fragment>
      {login && (
        <div className="top">
          <img
            alt="err"
            src="https://i.pinimg.com/originals/56/3b/ac/563bac0193808e94a25bcc88d77fd81e.png"
          />
          <h1>Touristivity</h1>
        </div>
      )}
      {!login && <LoginForm />}
      {login && <Nav />}
      {login && (
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/searchPlace">
            <SearchPlace />
          </Route>
          <Route path="/tp">
            <Fp />
          </Route>
          <Route path="/rec">
            <Top />
          </Route>
          <Route path="/family">
            <Topoff />
          </Route>
          <Route path="/home">
            <div className={Par["app"]}>
              <Home mail={email} pass={pswrd} />
            </div>
          </Route>
          <Route path="*">
            <img
              style={{ position: "relative", left: "11rem" }}
              width="840px"
              src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg"
              alt="err"
            />
          </Route>
        </Switch>
      )}
    </React.Fragment>
  );
};
export default App;
