import React from "react";
import { Header, Footer } from "./Components/index";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
