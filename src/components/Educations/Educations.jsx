import React from "react";
import "./eduStyle.css";

const TimelineItem = ({ year, title, content, isLast }) => {
  return (
    <div className="timeline-item">
      {/* Year and marker */}
      <div className="timeline-year-wrapper">
        <div className="timeline-year-container">
          <span className="timeline-year">{year}</span>
          <div
            className="timeline-marker"
            style={{ background: "#00ffee" }}
          ></div>
          {/* Horizontal connector - mobile only */}
          <div
            className="timeline-connector-mobile"
            style={{ background: "#00ffee" }}
          ></div>
        </div>
      </div>

      {/* Pill-shaped content container */}
      <div
        className="timeline-content"
        style={{ background: "#1a1a1a", borderColor: "#333333", border: 'solid 2px #00ffee' }}
      >
        <h3 className="timeline-title" style={{ background: "inherit" }}>
          {title}
        </h3>
        <p className="timeline-text" style={{ background: "inherit" }}>
          {content}
        </p>
      </div>

      {/* Vertical connector - desktop only */}
      {!isLast && (
        <div
          className="timeline-connector-vertical"
          style={{ background: "#00ffee" }}
        />
      )}
    </div>
  );
};

function Educations() {
  const educationData = [
    {
      year: "2023 - present",
      title: "Presidential Initiative for Artificial Intelligence & Computing",
      content:
        "Completed intensive training under the Presidential Initiative for Artificial Intelligence & Computing, focusing on AI concepts, machine learning models, and real-world applications.",
    },
    {
      year: "2022 - 2026 ",
      title: "Bachelor of Computer Science",
      content:
        "Specializing in artificial intelligence, machine learning, and data-driven systems from Agriculture University Peshawar. ",
    },
    {
      year: "2020 - 2022",
      title: "Intermediate in Computer Science",
      content:
        "Completed intermediate studies in Computer Science, building a strong foundation in computing principles and problem-solving techniques.",
    },
  ];

  return (
    <section className="educations-section" id="education">
      <h1 className="educations-title">Education</h1>

      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <TimelineItem
            key={index}
            year={edu.year}
            title={edu.title}
            content={edu.content}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export default Educations;
