import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { useHistory } from "react-router-dom";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
    localStorage.removeItem("loggedUser");
    history.replace("/");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Crunchy Restaurant</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
