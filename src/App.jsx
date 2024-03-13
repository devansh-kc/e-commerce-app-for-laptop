import React from "react";
import { Header } from "./Components/index";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
