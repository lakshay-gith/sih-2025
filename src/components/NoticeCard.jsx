import React from "react";

const NoticeCard = ({ notice }) => {
  return (
    <div className="notice-card">
      <h2 className="notice-title">{notice.title}</h2>
      <p className="notice-content">{notice.content}</p>
      <div className="notice-footer">
        <span className="notice-date">📅 {notice.date}</span>
        <span className="notice-issuer">✍️ {notice.issuedBy}</span>
      </div>
    </div>
  );
};

export default NoticeCard;
