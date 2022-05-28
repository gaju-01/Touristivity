import React from "react";
import Button from "../UI/Button/Button";
import Loginstyles from "./Loginform.module.css";
import useInput from "../../components/use-input/useInput";
import {useDispatch} from "react-redux";
import {actions} from "../store/store";
const Loginform = () => {
  const dispatch=useDispatch();
  const {
    name: email,
    isValid: emailValid,
    com_valid: ecomValid,
    setMyTouc: emailTouHandler,
    setMyName: emailHandler,
    reset:resetEmail,
  } = useInput(val => val.includes("@"));

  const {
    name: pswrd,
    isValid: pswrdValid,
    com_valid: pcomValid,
    setMyTouc: pswrdTouHandler,
    setMyName: pswrdHandler,
    reset:resetPswrd
  } = useInput(val=>val.trim().length>6);

  const isFormValid = emailValid && pswrdValid;


  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('v1','1');
    localStorage.setItem("email",email);
    localStorage.setItem("pass",pswrd);
    dispatch(actions.login({email:email,pswrd:pswrd}));
    resetEmail();
    resetPswrd();
  };

  return (
    <form onSubmit={submitHandler}>
      <div
        className={`${Loginstyles["form-class"]} ${Loginstyles["position-class"]}`}
      >
        <section>
          {ecomValid && (
            <p style={{ color: "red" }}>
              your email must include the '@' character!
            </p>
          )}
          <label htmlFor="email">email</label>
          <input
            onBlur={emailTouHandler}
            type="email"
            id="email"
            onChange={emailHandler}
          ></input>
        </section>
        <section>
          {pcomValid && (
            <p style={{ color: "red" }}>
              your password must be atleast 7 characters long!
            </p>
          )}
          <label htmlFor="password">password</label>
          <input
            onBlur={pswrdTouHandler}
            type="password"
            id="password"
            onChange={pswrdHandler}
          ></input>
        </section>
        <section>
          <Button type="submit" title="Login" disable={!isFormValid}></Button>
        </section>
      </div>
    </form>
  );
};

export default Loginform;
