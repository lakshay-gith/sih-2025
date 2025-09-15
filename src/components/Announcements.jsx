import React from "react";
import NoticeCard from "./NoticeCard";
import "./Announcements.css";

const Announcements = () => {
  // Dummy announcements list
  const notices = [
    {
      id: 1,
      title: "⚠️ Drill Postponed",
      content:
        "The scheduled Chemical Drill has been postponed. New dates will be announced soon. Stay alert and prepared.",
      date: "15 Sept 2025",
      issuedBy: "Institute Safety Committee",
    },
    {
      id: 2,
      title: "📢 Orientation Session",
      content:
        "An orientation session on Disaster Preparedness will be conducted on 20 Sept 2025 at 10:00 AM in the Seminar Hall.",
      date: "12 Sept 2025",
      issuedBy: "Disaster Management Cell",
    },
  ];

  return (
    <div className="announcements-container">
      <h1 className="page-title">Latest Announcements</h1>
      <div className="notice-list">
        {notices.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </div>
  );
};

export default Announcements;
