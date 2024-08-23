import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setemail] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please Enter the Email", {
        position: "top-center",
      });
    } else if (!email.includes("@") || !email.includes(".com")) {
      toast.warning("Please Enter the Valid Email Address", {
        position: "top-center",
      });
    } else {
      const res = await axios.post("http://localhost:2000/ForgotPassword", {
        email,
      });
      console.log(res);
      if (res.status === 201) {
        toast.success("Successfully Sent a link in Gmail");
      } else if (res.data === "Not Existed") {
        toast.info("Email is Not Existed");
      }
    }
  };

  return (
    <>
      <div className="login-container mb-5">
        <h1>Forgot Password</h1>
        <form onSubmit={handlesubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter the Email Address"
            onChange={(e) => setemail(e.target.value)}
          />

          <button type="submit">Send</button>
          <br />
          <p className="mb-0">
            Don't have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
