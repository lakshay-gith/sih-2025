import React, { useState } from "react";
import DisasterCard from "./DisasterCard";
import DisasterModal from "./DisasterModal";
import "./FeaturesAndSafety.css";

const disasterData = [
  {
    id: 1,
    name: "Earthquake",
    type: "Natural",
    description: "Ground shaking caused by tectonic activity.",
    safetyMeasures: [
      "Emergency evacuation plan",
      "Earthquake-resistant building structure",
      "First-aid kits and emergency supplies",
      "Regular safety drills for staff and students"
    ]
  },
  {
    id: 2,
    name: "Fire",
    type: "Man-Made",
    description: "Accidental or intentional fire hazard.",
    safetyMeasures: [
      "Fire extinguishers on every floor",
      "Smoke detectors and alarms",
      "Emergency exits clearly marked",
      "Fire safety training sessions"
    ]
  },
  {
    id: 3,
    name: "Flood",
    type: "Natural",
    description: "Water overflow due to heavy rains or dam release.",
    safetyMeasures: [
      "Safe elevated areas for evacuation",
      "Sandbags and water pumps",
      "Emergency contact numbers displayed",
      "Medical kits and dry food stock"
    ]
  },
  {
    id: 4,
    name: "Chemical Leak",
    type: "Man-Made",
    description: "Hazardous material spillage or leakage.",
    safetyMeasures: [
      "Proper ventilation and exhaust system",
      "Safety gear like masks and gloves",
      "Immediate evacuation plan",
      "Coordination with nearby hospitals"
    ]
  }
];

const FeaturesAndSafety = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null);

  return (
    <div className="safety-container">
      <h1>Features & Safety Measures Required</h1>
      <p>Select a disaster type to view essential safety measures.</p>

      <div className="safety-grid">
        {disasterData.map((disaster) => (
          <DisasterCard
            key={disaster.id}
            disaster={disaster}
            onClick={() => setSelectedDisaster(disaster)}
          />
        ))}
      </div>

      {selectedDisaster && (
        <DisasterModal
          disaster={selectedDisaster}
          onClose={() => setSelectedDisaster(null)}
        />
      )}
    </div>
  );
};

export default FeaturesAndSafety;
