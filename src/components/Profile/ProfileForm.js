import classes from "./ProfileForm.module.css";
import { useRef } from "react";
import { useSelector } from "react-redux";

const ProfileForm = () => {
  const newPasswordInput = useRef();

  const userToken = useSelector((state) => state.auth.token);

  const changePasswordHandler = (event) => {
    event.preventDefault();

    const newInputPassword = newPasswordInput.current.value;
    console.log(userToken.payload);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCqaPjIXRvdeGWoG9b0xDiwen05gw2wqiY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: userToken.payload,
          password: newInputPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      //TODO: //assuming that will work everytime
      // TODO:     //redirect
      const data = response.json();
      console.log(data);
    });
    //TODO:proper error validation
  };

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          required
          minLength={6}
          ref={newPasswordInput}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
