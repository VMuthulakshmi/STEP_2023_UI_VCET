import React from "react";
import {  Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import RestaurantList from "./pages/RestaurantList";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/restaurantList" element={<RestaurantList />} />
          <Route path={"/orders/:id"} element={<OrdersPage />}
      ></Route>
      </Routes>
    </div>

  );
}

export default App;
