import React from "react";
import { useParams } from "react-router-dom";
import ProductDescriptionCard from "../Components/Card/ProductDescriptionCard";
import Items from "../assets/Data";
const ProductDescriptionPage = () => {
  const { id } = useParams();
  const ProductId = Number(id);

  const ProductData = Items.filter((e) => e.id === ProductId);
  const qtyUpdate = ProductData.map((item) => {
    return { ...item, qty: 1 };
  });
  const product = qtyUpdate[0];

  return (
    <div>
      <ProductDescriptionCard data={product} />
    </div>
  );
};

export default ProductDescriptionPage;
