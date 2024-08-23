import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Please enter the Name");
    } else if (email === "") {
      toast.error("Plase enter the Email");
    } else if (!email.includes("@") || !email.includes(".com")) {
      toast.warning("Please enter the Vaild Email Address");
    } else if (number === "") {
      toast.error("Please enter the Number");
    } else if (number.length !== 10) {
      toast.error("Please enter the 10 digit Number");
    } else if (password === "") {
      toast.error("Please ente the password");
    } else if (password.length < 6) {
      toast.warning("Your password must contain at least 6 characters");
    } else {
      const res = await axios.post("http://localhost:2000/Signup", {
        name,
        email,
        number,
        password,
      });
      console.log(res);
      if (res.status === 201) {
        toast.success("Signup Successfully");
      } else if (res.data === "existed") {
        toast.info("User is Already Existed");
      }
    }
  };
  return (
    <>
      <div className="login-container mb-5">
        <h1>Create Account</h1>
        <form onSubmit={handlesubmit}>
          {/* Name */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Emte the Full Name"
            onChange={(e) => setname(e.target.value)}
          />

          {/* Email */}
          <label htmlFor="emil">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter the Email Address"
            onChange={(e) => setemail(e.target.value)}
          />

          {/* Number */}
          <label htmlFor="number">Number</label>
          <input
            type="text"
            name="password"
            value={number}
            placeholder="Enter the Number"
            onChange={(e) => setnumber(e.target.value)}
          />

          {/* Password */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="******"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit">Create Account</button>
          <br />
          <p className="mb-0 mt-0">
            Don't have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
