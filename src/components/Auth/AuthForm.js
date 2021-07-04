import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AuthForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

const AuthForm = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  //const [hasError, setError] = useState();

  const history = useHistory();

  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = async () => {
    console.log(isAuthenticated);
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    //TODO: validation
    let regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailInput.match(regexEmail)) {
      alert("Please insert valid email");
      return;
    }
    if (!passwordInput.length > 6) return;

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
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        dispatch(authActions.login(data.idToken, expirationTime.toISOString()));

        // setTimeout(() => {
        //   dispatch(authActions.logout());
        // }, 2000);

        dispatch(authActions.setUser(emailInput));
        localStorage.setItem("loggedUser", emailInput);
        history.replace("/");
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
