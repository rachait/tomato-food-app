import React from "react";
import "./FoodItem.css";

const FoodItem = ({ image, name, price, desc }) => {
  return (
    <div className="food-item">
      <img className="food-item-image" src={image} alt={name} />
      <div className="food-item-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;