import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import profile from "../../assets/profileImg.jpg";
import Icons from "../Icons/Icons";
import Buttons from "../Buttons/Buttons";
import Resume from '../../assets/Resume.pdf';
import "./heroStyle.css";

function Hero() {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const iconRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.from(containerRef.current, { opacity: 0 })
      .from(imgRef.current, { y: -50, opacity: 0 }, "-=0.5")
      .from(textRef.current, { y: 30, opacity: 0 }, "-=0.7")
      .from(iconRef.current, { scale: 0, opacity: 0 }, "-=0.6")
      .from(buttonRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.2
      }, "-=0.5");
  }, []);

  return (
    <section className="hero" id="home">
      <div
        ref={containerRef}
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
              ref={imgRef}
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
            ref={textRef}
            className="col text-light mb-4"
            style={{
              background: "transparent",
            }}
          >
            <span className="fs-1">
              Hi, It's <span style={{ color: "#00FCEE" }}>Hasaan Qureshi </span>
            </span>
            <br />
            <span>I'm a </span>
            <span style={{ color: "#00FCEE" }}>An innovative AI Engineer passionate</span>
          </div>

          <div ref={iconRef} className="col mb-4">
            <Icons />
          </div>

          <div ref={buttonRef} className="col d-flex gap-3 justify-content-center">
            <Buttons btn="Hire me" btnStyle="btnStyle1" />
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <Buttons btn="My resume" btnStyle="btnStyle2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
