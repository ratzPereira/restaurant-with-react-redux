import { useState, useRef } from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  //const [hasError, setError] = useState();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = async () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    //TODO: validation

    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqaPjIXRvdeGWoG9b0xDiwen05gw2wqiY";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqaPjIXRvdeGWoG9b0xDiwen05gw2wqiY";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            //setError(data.error.message);
            let errorMessage = "Authentication Failed";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //successful promise
        console.log(data);

        //TODO: do something with data, like store the token
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            minLength={6}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Loading...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
          {/*{hasError && <p>{hasError}</p>}*/}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;