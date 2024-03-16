import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
 return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="absolute inline-flex  bottom-0 text-4xl text-white font-black text-center ">
        Tired of Buying Not worthy product at High price
      </h1>
      <img className="" src="https://images.unsplash.com/photo-1606625000171-fa7d471da28c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero"/>
      <Link to="/product" className="absolute border-2 white justify-center mx-3 my-3 px-3 py-3 inline-flex text-xl text-white font-black">
        Explore more
      </Link>
    </div>
  )
}

export default Hero
