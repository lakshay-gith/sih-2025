import React, { useState } from "react";
import DrillListItem from "./DrillListItem";
import DrillDetailPanel from "./DrillDetailPanel";
import DrillDetailModal from "./DrillDetailModal";
import "./DrillPlanning.css";

/* Dummy drill data — update later or fetch from API */
const DRILLS = [
  {
    id: 1,
    name: "Earthquake Drill",
    category: "Natural",
    icon: "🌍",
    summary: "Practice duck-cover-hold, rapid safe evacuation and assembly.",
    howToPerform:
      "Simulate tremor conditions. Use a bell/announcement to start. Students perform DROP > COVER > HOLD, then follow evacuation routes to assembly points.",
    steps: [
      "Trigger alarm and announce drill",
      "Drop, cover and hold until shaking simulated stops",
      "Form quick, calm lines and proceed to nearest exit",
      "Assemble at designated assembly point",
      "Perform roll call and mark missing persons",
      "Debrief and note improvement points"
    ],
    prerequisites: [
      "Mapped evacuation routes & assembly points",
      "Marked exit signs & unobstructed corridors",
      "First-aid kits at assembly points",
      "Trained staff/teacher coordinators"
    ],
    safetyMeasures: [
      "Secure heavy furniture to walls",
      "Practice safe carry protocols for injured",
      "Designated shelter-in-place areas for aftershocks",
      "Clear communication (megaphone / PA) plan"
    ],
    expectedOutcome:
      "All occupants evacuated calmly within target time; staff can account for everyone and identify improvement areas."
  },
  {
    id: 2,
    name: "Fire Drill",
    category: "Man-Made",
    icon: "🔥",
    summary: "Alarm, extinguisher practice, safe evacuation and headcount.",
    howToPerform:
      "Start alarm, let students practice moving fast but orderly along evacuation routes. Demonstrate extinguisher use in a controlled area for staff.",
    steps: [
      "Trigger alarm and begin timed evacuation",
      "Use assigned escape routes and avoid elevators",
      "Meet at assembly area and complete roll call",
      "Designated staff demonstrate extinguisher use",
      "Check for blocked exits and report hazards",
      "Debrief and schedule remedial training if needed"
    ],
    prerequisites: [
      "Working fire alarms and smoke detectors",
      "Accessible fire extinguishers (inspected)",
      "Clear exit signage and unobstructed corridors",
      "Trained floor marshals"
    ],
    safetyMeasures: [
      "Regular extinguisher & alarm checks",
      "Clearly marked and lit escape routes",
      "Non-flammable storage for hazardous material",
      "Fire watch protocols during risky activities"
    ],
    expectedOutcome:
      "Orderly exit, rapid headcount, staff able to use extinguisher safely and identify fire-safety gaps."
  },
  {
    id: 3,
    name: "Flood Drill",
    category: "Natural",
    icon: "🌊",
    summary: "Move to elevated areas, secure equipment and maintain communication.",
    howToPerform:
      "Simulate sudden flood warning. Practice moving to pre-identified elevated shelters, secure vital equipment and maintain contact lists.",
    steps: [
      "Broadcast flood warning and evacuation to higher ground",
      "Move students and staff calmly to safe zone",
      "Take emergency kits and attendance registers",
      "Ensure vulnerable persons assisted first",
      "Coordinate with local authorities if needed",
      "Debrief and document gaps"
    ],
    prerequisites: [
      "Identified elevated safe zones",
      "Emergency kit (food, water, medical supplies)",
      "Contact list of emergency services",
      "Transport plan for large campuses"
    ],
    safetyMeasures: [
      "Barriers/sandbags for low-lying access points",
      "Electrical shutoff procedures",
      "Safe storage for chemicals and records",
      "Communication tree for parents & authorities"
    ],
    expectedOutcome:
      "Safe relocation to elevated zones; all occupants accounted for and critical resources secured."
  },
  {
    id: 4,
    name: "Chemical Leak Drill",
    category: "Man-Made",
    icon: "⚗️",
    summary: "Evacuate, isolate leak area, use PPE and inform authorities.",
    howToPerform:
      "Simulate a chemical spill: isolate area, don PPE, evacuate adjacent rooms and follow hazmat protocol. Demonstrate containment procedures for trained staff.",
    steps: [
      "Identify leak source and isolate the area (cordon off)",
      "Evacuate adjacent rooms and ventilate if safe",
      "Designated responders wear PPE and handle containment",
      "Call emergency services and follow hazmat instructions",
      "Account for all persons and decontaminate if required",
      "Debrief with safety officer"
    ],
    prerequisites: [
      "PPE stock (masks, gloves, goggles)",
      "Containment kits and absorbents",
      "Hazmat response plan",
      "Trained staff and nearby hospital coordination"
    ],
    safetyMeasures: [
      "Proper chemical labeling & storage",
      "Immediate isolation protocols",
      "Material safety data sheets available",
      "Emergency showers/eye-wash nearby"
    ],
    expectedOutcome:
      "Effective isolation of hazard, minimal exposure, quick external support and complete debrief for prevention."
  },
  {
    id: 5,
    name: "Thunderstorm Drill",
    category: "Natural",
    icon: "⛈️",
    summary: "Power safety, shelter-in-place and secure outdoor equipment.",
    howToPerform:
      "Announce severe weather: move people indoors, secure equipment, switch off sensitive electrical systems and prepare for possible power interruptions.",
    steps: [
      "Notify occupants and bring everyone indoors",
      "Turn off non-essential electrical equipment",
      "Move away from windows and external doors",
      "Secure loose outdoor equipment",
      "Ensure backup power protocols available",
      "Debrief and review communication effectiveness"
    ],
    prerequisites: [
      "Indoor shelter areas identified",
      "Backup power / power-off checklist",
      "Secure storage for outdoor equipment",
      "Communication plan for parents"
    ],
    safetyMeasures: [
      "Avoid tall isolated structures during lightning",
      "Surge protection for sensitive devices",
      "Do not use corded phones during storm",
      "Clear drainage channels to avoid local flooding"
    ],
    expectedOutcome:
      "Minimal equipment damage, occupants safe indoors and communications maintained."
  }
];

export default function DrillPlanning() {
  const [selected, setSelected] = useState(DRILLS[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (drill) => {
    setSelected(drill);
    // On small screens open modal instead of right panel
    if (window.innerWidth < 760) setModalOpen(true);
  };

  return (
    <div className="planning-root">
      <header className="planning-header">
        <div>
          <h1>Step-by-Step Drill Planning</h1>
          <p className="sub">
            Clear instructions, step lists, prerequisites and safety measures for each drill — pick one to view details.
          </p>
        </div>
      </header>

      <div className="planning-body">
        <aside className="planning-list" aria-label="Available drills">
          {DRILLS.map((d) => (
            <DrillListItem
              key={d.id}
              drill={d}
              selected={selected.id === d.id}
              onClick={() => handleSelect(d)}
            />
          ))}
        </aside>

        <main className="planning-detail" aria-live="polite">
          <DrillDetailPanel drill={selected} />
        </main>
      </div>

      {modalOpen && (
        <DrillDetailModal
          drill={selected}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
