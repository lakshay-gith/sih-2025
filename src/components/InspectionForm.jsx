import React, { useState } from "react";
import "./InspectionForm.css";

export default function InspectionForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    instituteName: "",
    place: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.instituteName && formData.place && formData.date && formData.time) {
      onSubmit(formData);
    } else {
      alert("Please fill all fields before submitting.");
    }
  };

  return (
    <form className="inspection-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="instituteName">Institute Name</label>
        <input
          type="text"
          id="instituteName"
          name="instituteName"
          placeholder="Enter institute name"
          value={formData.instituteName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="place">Place</label>
        <input
          type="text"
          id="place"
          name="place"
          placeholder="Enter institute location"
          value={formData.place}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Inspection Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Inspection Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button type="submit" className="submit-btn">
        Submit Request
      </button>
    </form>
  );
}
