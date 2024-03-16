import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage.jsx";
import CartPage from "./Pages/CartPage.jsx";
import Product from "./Pages/Product.jsx";
import Hero from "./Pages/Hero.jsx";
import { Provider } from "react-redux";
import {store} from "./store/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDescriptionPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
