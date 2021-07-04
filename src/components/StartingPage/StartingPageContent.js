import classes from "./StartingPageContent.module.css";
import backgroundImage from "../../assets/meals.jpg";

const StartingPageContent = () => {
  return (
    <section className={classes.starting}>
      <div className={classes["main-image"]}>
        <img src={backgroundImage} alt="Background" />
      </div>
      <h1>Welcome!</h1>
    </section>
  );
};

export default StartingPageContent;
