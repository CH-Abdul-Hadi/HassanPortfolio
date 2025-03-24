// import React from "react";
// import profile from "../../assets/profile.png";
// import Icons from "../Icons/Icons";
// import Buttons from "../Buttons/Buttons";
// function Hero() {
//   return (
//     <section className="hero">
//       <div
//         className="container"
//         style={{
//           height: "calc(100vh - 3rem)",
//           justifyContent: "center",
//           backgroundColor: "#080808",
//         }}
//       >
//         <div className="d-flex flex-column ">
//           <div className="col">
//             <img
//               className="rounded-circle "
//               src={profile}
//               style={{
//                 height: "13rem",
//                 width: "13rem",
//                 marginTop: "2.5rem",
//                 marginLeft: "2.3rem",
//                 backgroundColor: "#069B95",
//                 boxShadow: "0 0 25px #00FCEE",
//                 transition: "0.4s ease-in-out",
//               }}
//               alt="Profile image"
//             />
//           </div>
//           <div
//             className="col pt-3 ps-3  text-light"
//             style={{
//               background: "transparent",
//               marginTop: "0.5rem",
//               zIndex: "100",
//             }}
//           >
//             <span className="fs-1">
//               Hi, It's <span style={{ color: "#00FCEE" }}>Hasaan </span>
//             </span>
//             <br />
//             <span>I'm a </span>
//             <span style={{ color: "#00FCEE" }}>Web Developer</span>
//           </div>
//           <div className="col pt-2 ps-3 ">
//             <Icons />
//           </div>
//           <div className="col pt-3 ps-3 d-flex gap-3 ">
//             <Buttons btn="Hire me" btnStyle="btnStyle1" />
//             <Buttons btn="Hire me" btnStyle="btnStyle2" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;
import React from "react";
import profile from "../../assets/profile.png";
import Icons from "../Icons/Icons";
import Buttons from "../Buttons/Buttons";
import "./heroStyle.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="container"
        style={{
          minHeight: "calc(100vh - 3rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#080808",
          padding: "2rem",
        }}
      >
        <div
          className="d-flex flex-column align-items-center text-center"
          style={{ maxWidth: "800px" }}
        >
          <div className="col mb-4">
            <img
              className="rounded-circle"
              src={profile}
              style={{
                height: "13rem",
                width: "13rem",
                backgroundColor: "#069B95",
                boxShadow: "0 0 25px #00FCEE",
                transition: "0.4s ease-in-out",
              }}
              alt="Profile image"
            />
          </div>

          <div
            className="col text-light mb-4"
            style={{
              background: "transparent",
            }}
          >
            <span className="fs-1">
              Hi, It's <span style={{ color: "#00FCEE" }}>Hasaan </span>
            </span>
            <br />
            <span>I'm a </span>
            <span style={{ color: "#00FCEE" }}>Web Developer</span>
          </div>
          <div className="col mb-4">
            <Icons />
          </div>
          <div className="col d-flex  gap-3 justify-content-center">
            <Buttons btn="Hire me" btnStyle="btnStyle1" />
            <Buttons btn="Hire me" btnStyle="btnStyle2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
