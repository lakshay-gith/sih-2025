import React, { useState } from "react";
import InspectionForm from "./InspectionForm";
import SuccessModal from "./SuccessModal";
import "./InspectionRatings.css";

export default function InspectionRatings() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (formData) => {
    console.log("Inspection Request Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="inspection-root">
      <header className="inspection-header">
        <h1>Inspection Rating Request</h1>
        <p className="subtitle">
          Fill out the form to schedule your institute’s safety inspection.
        </p>
      </header>

      <main className="inspection-main">
        <InspectionForm onSubmit={handleSubmit} />
      </main>

      {submitted && <SuccessModal onClose={() => setSubmitted(false)} />}
    </div>
  );
}
