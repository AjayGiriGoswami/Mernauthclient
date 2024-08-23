import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { LoginContext } from "../Context/Context";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const {setUsers} = useContext(LoginContext)
  const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Please enter the Email", {
        position: "top-center",
      });
    } else if (!email.includes("@") || !email.includes(".com")) {
      toast.warning("Please enter the Vaild Email address", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("Please enter the Password", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.warning("Your password must contain at least 6 characters", {
        position: "top-center",
      });
    } else {
      axios.defaults.withCredentials = true;
      const res = await axios.post("http://localhost:2000/Login", {
        email,
        password,
      });
      console.log(res);
      if (res.status === 201) {
        toast.success("Login Successfully", {
          position: "top-center",
        });
        localStorage.setItem("token",res.data.result.token)
        setUsers(res.data.result.olduser)
        navigate("/")
      } else if (res.data === "Wrong Password") {
        toast.warning("Wrong password", {
          position: "top-center",
        });
      } else if (res.data === "Not Existed") {
        toast.info("User is Not Existed", {
          position: "top-center",
        });
      
      }}
    }
  
  return (
    <div className="login-container mb-5">
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter the Email Address"
          onChange={(e) => setemail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="******"
          onChange={(e) => setpassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <br />
        <p className="mb-2">
          Don't have an account? <Link to="/Signup">Signup</Link>
        </p>
        <p className="mb-0">
          Forgot Password? <Link to="/ForgotPassword">Forgot Password</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
