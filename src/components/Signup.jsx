import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import logo from "../assets/Sih-logo.png"; 


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    instituteCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.role === "institute" && formData.instituteCode !== "12345") {
      alert("Invalid Institute Code. Please contact admin.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    alert("Signup successful! Please login.");
    navigate("/login");
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
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="institute">Institute</option>
        </select>

        {formData.role === "institute" && (
          <input
            type="text"
            name="instituteCode"
            placeholder="Enter Institute Code"
            value={formData.instituteCode}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
