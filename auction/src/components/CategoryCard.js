import React from "react";
import "../style/card.css";

const CategoryCard = (props) => {
  return (
    <div className="card-con">
      <div className="card">
        <img src={props.image} alt={props.name} width="180px" height="140px" />
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <br />
        <button onClick={props.onClick}>View All Item</button>
      </div>
    </div>
  );
};

export default CategoryCard;
