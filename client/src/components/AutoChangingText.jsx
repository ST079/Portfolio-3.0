import React, { useState, useEffect } from "react";
import "./AutoChangingText.css"; // Create this CSS file

const AutoChangingText = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const texts = [
    "Creator. Developer. Designer.",
    "Self-motivated. Problem Solver. Innovator.",
    "Tech Enthusiast. Lifelong Learner. Collaborator.",
    "Passionate about building impactful solutions.",
  ];

  const [currentText, setCurrentText] = useState(texts[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const cycleText = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = texts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setFade(true);
      }, 500); // Matches the CSS transition time
    };

    const interval = setInterval(cycleText, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="auto-changing-textbox">
      <p className={`text-content ${fade ? "fade-in" : "fade-out"}`}>
        {currentText}
      </p>
    </div>
  );
};

export default AutoChangingText;
