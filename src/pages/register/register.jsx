

import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { useState } from "react";

export const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://capstoneprojectserver-1.onrender.com/users/new-users",
        { userName, email, password }
      );

      //console.log("FULL RESPONSE:", response.data); //Check this in the browser console

      const { message, token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert(message || "Signup successful!");
      setUserName("");
      setEmail("");
      setPassword("");

      // Redirect to wherever you want
      navigate(`/login`);
    } catch (error) {
      console.error("Signup failed:", error.response?.user || error.message);
      alert(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (

    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          className="registerInput"
          type = "password"
          placeholder="Enter your password..."
          value = {password}
          onChange = {  (e) => setPassword(e.target.value)}
        />

        <div className="registerButtonContainer">
          <button className="registerButton" type="submit">
            Register
          </button>
        </div>
      </form>

      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>

    </div>
  );
};


