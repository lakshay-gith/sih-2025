import React, { useState } from "react";
import ThankYouModal from "./ThankYouModal";
import "./DrillParticipation.css";

const DrillParticipation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
    drill: "",
    reason: "",
    consent: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("You must agree to the consent before submitting.");
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="participation-container">
      <h1 className="form-title">Drill Participation Form</h1>
      <form className="participation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="text"
            name="roll"
            value={formData.roll}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Select Drill:</label>
          <select
            name="drill"
            value={formData.drill}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Drill --</option>
            <option value="Earthquake">Earthquake Drill</option>
            <option value="Fire">Fire Drill</option>
            <option value="Flood">Flood Drill</option>
            <option value="Chemical">Chemical Spill Drill</option>
            <option value="Thunderstorm">Thunderstorm Drill</option>
          </select>
        </div>

        <div className="form-group">
          <label>Reason for Participation:</label>
          <textarea
            name="reason"
            rows="4"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Why do you want to participate in this drill?"
            required
          />
        </div>

        <div className="form-consent">
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            I confirm I am 18+ and participating with parental permission.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Participation
        </button>
      </form>

      {showModal && <ThankYouModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default DrillParticipation;
