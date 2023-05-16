import React from "react";
import TopBar from "./Components/TopBar";
import About from "./Components/About";
import { Route, Routes } from "react-router";
import Contact from "./Components/Contact";
import Policy from "./Components/Policy";
import Navbars from "./Components/Navbars";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter } from "react-router-dom";
import CartScreen from "./Screens/CartScreen";

import Login from "./Screens/Login";
import Register from "./Screens/Register";
import OrderScreen from "./Screens/OrderScreen";
import AdminScreen from "./Screens/AdminScreen";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbars />
      <Routes>
        <Route path="/about" element={<About />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/admin/*" element={<AdminScreen />} />

        <Route path="/login" element={<Login />} exact />
        <Route path="/orders" element={<OrderScreen />} exact />

        <Route path="/contact" element={<Contact />} exact />
        <Route path="/policy" element={<Policy />} exact />
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/Cart" element={<CartScreen />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
