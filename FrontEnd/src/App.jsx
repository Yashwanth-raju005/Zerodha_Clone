import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./landing_page/Home/HomePage";
import SignUp from "./landing_page/Signup/Signup";
import AboutPage from "./landing_page/About/AboutPage";
import ProductsPage from "./landing_page/Products/ProductsPage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import SupportPage from "./landing_page/Support/SupportPage";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Register from "./landing_page/Logins/Register";
import Login from "./landing_page/Logins/Login";
import Home from "../../FrontEnd/src/components/Home";

import "./App.css";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashhome");

  return (
    <>
      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashhome/*" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isDashboard && <Footer />}
    </>
  );
}

export default App;
