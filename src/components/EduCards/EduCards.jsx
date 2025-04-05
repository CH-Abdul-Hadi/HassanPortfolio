import React from "react";

function EduCards(props) {
  return (
    <section
      className="rounded-pill shadow-sm"
      style={{
        width: "17rem",
        height: "8rem",
        backgroundColor: "inherit",
        border: "2px solid #00ffce",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid 2px #00ffee",
      }}
    >
      <h4 className="mb-2 ">{props.eduName}</h4>
      <p className="text-muted mb-0">{props.eduContent}</p>
    </section>
  );
}

export default EduCards;
