import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

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

    // If role is institute, validate institute code
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
      <h1
      style={{
    position: "absolute",
    top: "40px",
    left: "10%",
    transform: "translateX(-50%)",
    fontFamily: "Poppins, sans-serif",
    fontSize: "2.2rem",
    fontWeight: "700",
    letterSpacing: "2px",
    color: "#e63946",
    textShadow: "2px 2px 6px rgba(0,0,0,0.2)",
    cursor: "default",
    userSelect: "none",
  }}
>
  ResQ<span style={{ color: "#0f2b5cff" }}>360</span>
</h1>
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

        {/* Show this only if Institute is selected */}
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
