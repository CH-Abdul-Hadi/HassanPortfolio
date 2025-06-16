import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";

// Typewriter Text Animation
const TypewriterText = ({ text }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="inline-flex items-center text-[#00FFCE]">
      {displayed}
      <span className="text-[#00FFCE] animate-pulse ml-1">|</span>
    </span>
  );
};

// Icon Button Component
const IconGlowButton = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0d0d0d]/80 rounded-xl text-[#00FFCE] hover:text-[#00FFCE] hover:bg-[#00FFCE]/20 backdrop-blur-md transition-all duration-300"
    role="button"
  >
    <Icon className="w-5 h-5" />
  </a>
);

// Main Loader Component
const WelcomeScreen = ({ onLoadingComplete = () => {} }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadingComplete();
        document.body.style.overflow = "";
      }, 7000); // fixed timer (7 seconds)
    }, 3000); // visible for 3 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onLoadingComplete]);

  const containerAnim = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
      transition: { duration: 0.7 },
    },
  };

  const textAnim = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-[#080808] mt-5 text-white flex items-center justify-center z-50"
          variants={containerAnim}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="z-10 text-center space-y-8 w-full max-w-3xl px-6 mx-auto h-full flex flex-col justify-center items-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-[#00FFCE] bg-yellow-200 p-6 m-6 rounded-xl"
              variants={textAnim}
              initial="initial"
              animate="animate"
            >
              Welcome to My Portfolio
            </motion.h1>

            <motion.a
              href="https://www.eki.my.id"
              target="_blank"
              rel="noopener noreferrer"
              variants={textAnim}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black/50 backdrop-blur-lg rounded-full text-[#00FFCE] hover:bg-[#00FFCE]/10 hover:text-[#00FFCE] transition"
            >
              <TypewriterText text="www.eki.my.id" />
              <Globe className="w-5 h-5" />
            </motion.a>

            <motion.div
              className="flex flex-row justify-center items-center gap-6 pt-5"
              variants={textAnim}
              initial="initial"
              animate="animate"
            >
              <IconGlowButton Icon={Code2} href="#code" />
              <IconGlowButton Icon={User} href="#about" />
              <IconGlowButton Icon={Github} href="https://github.com" />
            </motion.div>
          </div>

          <style>
            {`
              @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 8s ease infinite;
              }
              .animate-pulse-slow {
                animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
