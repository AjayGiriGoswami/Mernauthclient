import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Home from "./Components/Home/Home";
import Signup from "./Components/User/Signup";
import Login from "./Components/User/Login";
import Header from "./Components/Header/Header";
import ForgotPassword from "./Components/User/ForgotPassword";
// Bootstrap link
import "bootstrap/dist/css/bootstrap.min.css";
import RestPassword from "./Components/User/RestPassword";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/RestPassowrd/:id/:token" element={<RestPassword />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
