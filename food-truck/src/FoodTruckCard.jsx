import React from "react";
import "./FoodTruckCard.css";

const FoodTruckCard = ({ truck }) => {
  const openMenu = () => {
    window.open(truck.menuLink, "_blank");
  };

  return (
    <div className="card">
      <img src={truck.image} alt={truck.name} className="card-image" />
      <h2 className="card-title">{truck.name}</h2>
      <p className="card-cuisine">{truck.cuisine}</p>
      <button className="card-button" onClick={openMenu}>View Menu</button>
    </div>
  );
};

export default FoodTruckCard;