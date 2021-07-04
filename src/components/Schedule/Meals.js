import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <ul className={classes.div}>
      <li className={classes.divezinha}>
        <img src={props.img} alt="Thisismeal" className={classes.image} />
      </li>
    </ul>
    // <button className={classes.button}>{props.type}</button>
  );
};

export default Meals;
