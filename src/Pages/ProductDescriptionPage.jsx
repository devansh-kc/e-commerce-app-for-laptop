import React from 'react'
import { useParams } from "react-router-dom"
import ProductDescriptionCard from "../Components/Card/ProductDescriptionCard"
import Items from "../assets/Data"
const ProductDescriptionPage = () => {
    const {id} = useParams();
    const ProductId =Number(id);
    const ProductData=  Items.find(e=>e.id===ProductId)


  return (
    <div><ProductDescriptionCard data={ProductData} /></div>
  )
}

export default ProductDescriptionPage;