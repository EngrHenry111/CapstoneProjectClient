
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

export const Login = ({setUser}) => {
  
  const navigate = useNavigate();

  const [email, setEmail] =  useState("");
  const [password, setPassword] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("https://capstoneprojectserver-1.onrender.com/users/login", {
      email,
      password,
    })
    .then((response) => {
      setUser(response.data.user);
      console.log(response.data.user);
      alert(response.data.message);
      setEmail("");
      setPassword("");
  
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
  
      navigate("/");
    })
    
    
    .catch((error) => {
      console.error("Login failed:", error);
      alert(error.response?.data?.message || "Login failed. Please try again.");
    }); 
  }



  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="loginInput"
          type="email"
          placeholder="Enter your email..."
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />

        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <button className="registerButton">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
};
{/* <button className="registerButton">
<Link className="link" to="/register">Register</Link>
</button> */}
