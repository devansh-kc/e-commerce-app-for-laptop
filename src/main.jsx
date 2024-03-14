import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import Product from "./Pages/Product.jsx";
// TODO : routing set kar ni hai , cart page bana na hai , hero component banana hai 
// 1. routing , i> kitne routes chaiye . i.1 product , hero page with carosoule , cart , and payment details page  , lgoin aur sign up page 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
      {
        path:"/product/:id",
        element:<ProductDescriptionPage/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
