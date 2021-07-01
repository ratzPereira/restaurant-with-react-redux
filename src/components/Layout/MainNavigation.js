import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const MainNavigation = () => {
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
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
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li>

          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
