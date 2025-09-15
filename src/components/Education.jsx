import React, { useState } from "react";
import DisasterCardEdu from "./DisasterCardEdu";
import DisasterModalEdu from "./DisasterModalEdu";
import "./Education.css";

const Education = () => {
  const [selectedDisaster, setSelectedDisaster] = useState(null);

  const disasters = [
    {
      id: 1,
      name: "🌍 Earthquake",
      description: "Sudden shaking of the earth caused by tectonic movements.",
      details: {
        start: "Caused by movement of tectonic plates under Earth's crust.",
        danger: "Destroys infrastructure, triggers tsunamis, causes loss of life.",
        deadliest: "2004 Indian Ocean Earthquake & Tsunami killed 230,000+ people.",
      },
    },
    {
      id: 2,
      name: "🌊 Flood",
      description: "Overflow of water submerging normally dry land.",
      details: {
        start: "Caused by heavy rainfall, dam breaks, or rapid snowmelt.",
        danger: "Sweeps away homes, crops, and leads to waterborne diseases.",
        deadliest: "1931 China floods caused around 4 million deaths.",
      },
    },
    {
      id: 3,
      name: "⛈️ Thunderstorm",
      description: "Storm with lightning, thunder, and heavy rain.",
      details: {
        start: "Moisture, unstable air, and lifting mechanism combine to form.",
        danger: "Causes lightning strikes, floods, hail, and strong winds.",
        deadliest: "Bangladesh (1983) — 100+ killed by lightning in one day.",
      },
    },
    {
      id: 4,
      name: "☣️ Chemical Leak",
      description: "Hazardous chemical release into the environment.",
      details: {
        start: "Industrial accidents, transport leaks, or storage failures.",
        danger: "Causes poisoning, burns, respiratory failure, long-term diseases.",
        deadliest: "Bhopal Gas Tragedy (1984) killed 15,000+ people.",
      },
    },
    {
      id: 5,
      name: "🔥 Fire",
      description: "Uncontrolled burning causing destruction.",
      details: {
        start: "Ignition from heat, electricity, or human negligence.",
        danger: "Leads to burns, smoke inhalation, property & wildlife loss.",
        deadliest: "Peshtigo Fire (1871) in USA killed 1,500–2,500 people.",
      },
    },
  ];

  return (
    <div className="education-container">
      <h1 className="edu-title">🌐 Learn About Disasters</h1>
      <p className="edu-subtitle">
        Click on a disaster card to explore how it starts, why it's dangerous,
        and its deadliest occurrences.
      </p>

      <div className="edu-grid">
        {disasters.map((disaster) => (
          <DisasterCardEdu
            key={disaster.id}
            disaster={disaster}
            onClick={() => setSelectedDisaster(disaster)}
          />
        ))}
      </div>

      {selectedDisaster && (
        <DisasterModalEdu
          disaster={selectedDisaster}
          onClose={() => setSelectedDisaster(null)}
        />
      )}
    </div>
  );
};

export default Education;
