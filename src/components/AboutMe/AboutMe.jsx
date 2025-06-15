// AboutMe.jsx
import React, { useEffect, useRef } from "react";
import style from "./AboutMe.module.css";
import SkillCard from "../skillCard/SkillCard";
import profileImg from "../../assets/profileHa.jpg";
import phyton from '../../assets/python.svg'

function AboutMe() {
  const aboutRef = useRef(null);

  return (
    <section id="about">
      <div ref={aboutRef} className={style.aboutMe}>
        <h1 className={style.abouthead} id="abouthead about">
          About Me
        </h1>
        <div className={style.aboutMain} id="aboutMain">
          <img
            src={profileImg}
            height={250}
            id="aboutImg"
            className={style.aboutImg}
            alt=""
          />
          <p className={style.aboutText} id="aboutText">
          I'm Hasaan Qureshi, An innovative AI Engineer passionate about creating intelligent agents and scalable AI-driven solutions. <br /> With deep expertise in OpenAI Agent SDK, LangGraph, LangChain, CrewAI, and Python, I excel at building cloud-native AI applications that are both innovative and efficient. My work centers on designing seamless AI workflows, harnessing event-driven architectures with tools like FastAPI and Kafka, and fine-tuning systems for peak performance. <br /> I’m eager to join a visionary team where my technical prowess and creative problem-solving can push the boundaries of AI and cloud technology.
          </p>
        </div>
        {/* skill not in use */}
        {/* <div className={style.skillimg} id="skillimg">
          <h1 className={style.skillhead} id="skillhead">
            My Skills
          </h1>
          <div className={style.mySkills} id="mySkills">            
            <SkillCard className="skillCard" skill={phyton} />
            <SkillCard className="skillCard" skill={css} />
            <SkillCard className="skillCard" skill={bootstrapsicon} />
            <SkillCard className="skillCard" skill={js} />
            <SkillCard className="skillCard" skill={react} />
            <SkillCard className="skillCard" skill={vite} />
            <SkillCard className="skillCard" skill={wordpress} />
          </div>
        </div> */}

        {/* <div className={style.exp} id="exp">
          <Experience expTitle="Contributions" expNum="3" />
          <Experience expTitle="Projects" expNum="32" />
          <Experience expTitle="Certificates" expNum="3" />
        </div> */}
      </div>
    </section>
  );
}

export default AboutMe;
