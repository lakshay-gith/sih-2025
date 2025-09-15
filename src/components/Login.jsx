import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Sih-logo.png"; 
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      if (storedUser.role === "student") {
        navigate("/student-dashboard");
      } else if (storedUser.role === "institute") {
        navigate("/institute-dashboard");
      }
    } else {
      alert("Invalid credentials or user not found.");
    }
  };

  return (
    <div className="auth-container">
      <img
        src={logo}
        alt="ResQ360 Logo"
        style={{
          position: "absolute",
          top: "-20px",
          left: "15%",
          transform: "translateX(-50%)",
          height: "200px",
          WebkitMaskImage: `url(${logo})`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
        }}
      />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account?{" "}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
