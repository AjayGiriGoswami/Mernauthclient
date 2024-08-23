import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const RestPassword = () => {
  const [password, setpassword] = useState("");
  const { id, token } = useParams();

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (password === "") {
      toast.error("Please Enter the Password", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.warning("Your password must contain at least 6 characters", {
        position: "top-center",
      });
    } else {
      const res = await axios.post(
        `http://localhost:2000/RestPassword/${id}/${token}`,
        {
          password,
        }
      );
      console.log(res.data);
      if (res.status === 201) {
        toast.success("Password is Update");
      } else if (res.data === "expries") {
        toast.error("Link is Expires");
      }
    }
  };

  return (
    <div>
      <div className="login-container mb-5">
        <h1>Rest Password</h1>
        <form onSubmit={handlesubmit}>
          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="******"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit">Password Update</button>
          <br />
          <p className="mb-2">
            Go Back to Login Pages <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RestPassword;
