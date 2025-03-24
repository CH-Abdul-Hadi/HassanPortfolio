import React from "react";
import Cards from "../Cards/Cards";
import './testemonialStyle.css'

function Testomonials() {
  return (
    <section
      className="testomonials"
      style={{
        minHeight: "100vh",
        backgroundColor: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        gap: "2rem",
      }}
    >
      <h1 className="text-center text-light" style={{ marginBottom: "1rem" }}>
        Testimonials
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Cards cardImg="" cardText="" cardName="" />
        <Cards cardImg="" cardText="" cardName="" />
        <Cards cardImg="" cardText="" cardName="" />
      </div>
    </section>
  );
}

export default Testomonials;