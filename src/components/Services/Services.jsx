import React from "react";
import "./services.css";
import Cards from "../Cards/Cards";

function Services() {
  return (
    <div>
      <section
        className="services"
        id="services"
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
          Services
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
          <Cards cardImg="" cardText=" OpenAI Agent SDK, CrewAI, LangGraph, LangChain" cardName="AI & Agent Frameworks" />
          <Cards cardImg="" cardText="LLMs (ChatGPT, Grok, Deepseek), Prompt Engineering" cardName="Machine Learning & AI" />
          <Cards cardImg="" cardText="FastAPI, Kafka" cardName="Event Driven & Streaming" />
          <Cards cardImg="" cardText="NoSQL & Python" cardName="Databases & languages" />
        </div>
      </section>
    </div>
  );
}

export default Services;
