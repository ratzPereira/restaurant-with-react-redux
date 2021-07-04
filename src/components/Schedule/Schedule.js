import classes from "./Schedule.module.css";
import MealOfTheDay from "./MealOfTheDay";
import { plates } from "../../assets/Data";
import Meals from "./Meals";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const Schedule = () => {
  return (
    <div className={classes.schedule}>
      {plates.map((plate) => (
        <MealOfTheDay days={plate.Day} img={plate.img} type={plate.Type} />
      ))}
      {/*{days.map((day) => (*/}
      {/*  <MealOfTheDay days={day} />*/}
      {/*))}*/}
    </div>
  );
};

export default Schedule;
