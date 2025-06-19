import React from "react";
import Cards from "../Cards/Cards";
import "./testemonialStyle.css";
import crewai from "../../assets/crewai.png";
import deeplearing from "../../assets/deeplearning.png";
import microsoft from "../../assets/microsoft.svg";
import Slider from "../Slider/Slider";

function Testomonials() {
  return (
    <section
      className="testomonials"
      id="certificates"
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
        Certificates
      </h1>
      {/* not in use */}
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Cards cardImg={crewai} cardName="CrewAI" cardText="Multi AI Agents System " />
        <Cards cardImg={microsoft} cardName="Microsoft" cardText="AI Agentic Design Pattern with Autogen " />
        <Cards cardImg={deeplearing} cardName="DeepLearning.AI" cardText="AI Python for Beginner " />
      </div> */}
      {/* not in use */}

      <Slider/>
    </section>
  );
}

export default Testomonials;
