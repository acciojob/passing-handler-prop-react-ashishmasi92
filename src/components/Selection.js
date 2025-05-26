import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    if (applyColor) {
      setBgColor(applyColor.backgroundColor);
    }
  };

  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
      data-testid={bgColor}
    ></div>
  );
};

export default Selection;
