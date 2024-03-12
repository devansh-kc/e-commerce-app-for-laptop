import React from "react";
import Card from "../Components/Card/ProductCard";
import Items from "../assets/Data"


const Product = () => {
  return (
    <div>
      {Items.map((Item) => {
        return (
          <div key={Item.id}>
            <Card {...Item} />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
