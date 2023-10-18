import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          const { image, name, price } = menuItem;
          return <MenuItem key={key} image={image} name={name} price={price} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
