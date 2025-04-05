import React from "react";
import "./cardStyle.css";
import profileImg from "../../assets/profileHa.jpg";

const Cards = (props) => {
  return (
    <div
      className="card"
      style={{
        flex: "1 1 300px", // Flexible growth and shrink with minimum width
        maxWidth: "17rem",
        height: "20rem",
        backgroundColor: "#111",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        margin: "0 auto",
        border: "solid 2px #00ffee",
      }}
    >
      <img
        src={props.cardImg || profileImg} // Added fallback image
        className="rounded-circle mt-4 mb-3"
        style={{
          width: "90px",
          height: "90px",
          objectFit: "cover",
        }}
        alt="Profile"
      />
      <p
        className="text-light text-center px-2"
        style={{
          background: "inherit",
          flexGrow: 1,
          margin: "0",
          overflow: "auto",
        }}
      >
        {props.cardText}
      </p>
      <h3
        className="text-light mt-2"
        style={{
          background: "inherit",
          fontSize: "1.25rem",
        }}
      >
        {props.cardName}
      </h3>
    </div>
  );
};

export default Cards;
