import { plates } from "../../assets/Data";
import classes from "./MenuList.module.css";
import MenuItem from "./MenuItem";
import Card from "../UI/Card";

const plateList = plates.map((item) => (
  <MenuItem
    key={`${item.Name}${item.Price}`}
    name={item.Name}
    imageUrl={item.img}
    day={item.Day}
    price={item.Price}
    type={item.Type}
  />
));

const MenuList = () => {
  return (
    <>
      <h1 className={classes.menuTitle}>Our delicious Menu</h1>
      <section className={classes.meals}>
        <Card>
          <ul>{plateList}</ul>
        </Card>
      </section>
    </>
  );
};

export default MenuList;
