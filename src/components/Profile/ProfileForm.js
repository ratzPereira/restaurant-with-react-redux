import classes from "./ProfileForm.module.css";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const newPasswordInput = useRef();

  const userToken = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  const history = useHistory();

  const changePasswordHandler = (event) => {
    event.preventDefault();

    const newInputPassword = newPasswordInput.current.value;

    if (newInputPassword.length < 6) {
      alert("You password must be 6 characters long");
      return;
    }

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
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then(() => {
            let errorMessage = "Could not change your password";
            throw new Error(errorMessage);
          });
        }
        const data = response.json();
        console.log(data);
        history.replace("/auth");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={changePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password for {user}</label>
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
