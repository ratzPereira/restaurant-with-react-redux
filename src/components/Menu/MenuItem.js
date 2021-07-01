import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div
          className={classes.image}
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <div className={classes.description}>Available on {props.day}</div>
        <div className={classes.price}>For just {props.price}$</div>
      </div>
    </li>
  );
};

export default MenuItem;
