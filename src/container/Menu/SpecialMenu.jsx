import React from "react";

import "./SpecialMenu.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <div className="app__spetialMenu flex__center section__padding" id="menu">
      {/* ЗАГОЛОВОК */}
      <div className="app__spetialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      {/* ЗАГОЛОВОК */}
      <div className="app__spetialMenu-menu">
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="app__spetialMenu-menu_wine flex__center">
          <p className="app__spetialMenu-menu_heading">Wine & beer</p>
          <div className="app__spetialMenu-menu_items">
            {data.wines.map((wine, idx) => (
              <MenuItem
                key={idx}
                title={wine.title}
                tags={wine.tags}
                price={wine.price}
              />
            ))}
          </div>
        </div>
        {/* ЛЕВАЯ ЧАСТЬ */}
        {/* КАРТИНКА */}
        <div className="app__spetialMenu-menu_img">
          <img src={images.menu} alt="cocktails" />
        </div>
        {/* КАРТИНКА */}
        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="app__spetialMenu-menu_cocktails flex__center">
          <p className="app__spetialMenu-menu_heading">Cocktails</p>
          <div className="app__spetialMenu-menu_items">
            {data.cocktails.map((cocktail, idx) => (
              <MenuItem
                key={idx}
                title={cocktail.title}
                tags={cocktail.tags}
                price={cocktail.price}
              />
            ))}
          </div>
        </div>
        {/* ПРАВАЯ ЧАСТЬ */}
      </div>
      {/* КНОПКА */}
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      {/* КНОПКА */}
    </div>
  );
};

export default SpecialMenu;
