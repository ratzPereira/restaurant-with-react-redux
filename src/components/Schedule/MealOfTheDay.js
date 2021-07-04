import classes from "./MealOfTheDay.module.css";
import Card from "../UI/Card";
import Meals from "./Meals";

const MealOfTheDay = (props) => {
  return (
    <Card>
      <span className={classes.span}>{props.days}</span>
      <Meals img={props.img} type={props.type} />
      <select>
        <option defaultValue="None">None</option>
        <option value="Meat">Meat</option>
        <option value="Fish">Fish</option>
      </select>
    </Card>
  );
};

export default MealOfTheDay;
