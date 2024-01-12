import React, { useState, useEffect } from "react";

export const ProgressBar = ({ percentage }) => {
  const [width, setWidth] = useState(0);
  const [barColor, setBarColor] = useState("rgb(0, 209, 31)");
  const [textColor, setTextColor] = useState("black");
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    setWidth(percentage);

    if (percentage <= 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    if (percentage > 70) {
      setBarColor("rgb(254, 20, 20)");
      setTextColor("white");
    } else {
      setBarColor("rgb(0, 209, 31)");
      setTextColor("black");
    }
  }, [percentage]);

  return (
    <div
      style={{
        width: "80%",
        height: "20px",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "10px",
        overflow: "hidden",
        marginTop: "2em",
        position: "relative",
      }}
      hidden={isHidden}
    >
      <div
        style={{
          width: `${width}%`,
          backgroundColor: barColor,

          height: "100%",
          background: `linear-gradient(45deg, #30b0ff 0%, ${barColor} 100%)`,
          borderRadius: "10px",
          position: "relative",
          transition: "width 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: textColor,
            fontWeight: "bold",
          }}
        >
          {width}%
        </div>
      </div>
    </div>
  );
};
