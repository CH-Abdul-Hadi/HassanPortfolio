import { useState } from "react";
import "./Slider.css";
import newImg from "../../assets/try.jpeg"
import Button2 from "../sliderBtn/Button2";


const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      image: newImg,
      title: "CrewAI",
      para: "Multi AI Agents System.",
      src: "https://tech-repo.vercel.app/",
    },

    {
      image: newImg,
      title: "Microsoft",
      para: "AI Agentic Design Pattern with Autogen.",
      src: "https://foodpanda-clone-beige.vercel.app/",
    },

    {
      image: newImg,
      title: "DeepLearning.AI",
      para: "AI Python for Beginner.",
      src: "https://foodpanda-clone-beige.vercel.app/",
    },

  ];

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const calculateStyle = (index) => {
    let stt = 0;
    let style = {};


    if (index === activeIndex) {
      return {
        transform: "none",
        zIndex: 1,
        filter: "none",
        opacity: 1,
      };
    }

    if (index > activeIndex) {
      stt = index - activeIndex;
      style.transform = `translateX(${280 * stt}px) scale(${
        0.8 - 0.1 * stt
      }) perspective(16px) rotateY(-1deg)`;
    } else {
      stt = activeIndex - index;
      style.transform = `translateX(${-280 * stt}px) scale(${
        0.8 - 0.1 * stt
      }) perspective(16px) rotateY(1deg)`;
    }

    style.zIndex = 50;
    style.filter = "blur(4px)";
    style.opacity = stt > 2 ? 0 : 0.6;

    return style;
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className="item" style={calculateStyle(index)}>
          <div className="image-container">
            <img src={slide.image} loading="lazy" alt={slide.title} />
          </div>
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.para}</p>
            <a href={slide.src} target="_blank">
              <Button2/>
            </a>
          </div>
        </div>
      ))}

      <button className="nav-btn prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="nav-btn next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;