import React from "react";

export const Button = ({ children, onClick }) => {
  return (
    <button
      style={{
        margin: "1em",
        outline: "none",
        border: "none",
        backgroundColor: "rgb(114, 123, 255)",
        color: "white",
        padding: "0.6em 2em",
        fontWeight: "bold",
        borderRadius: "3px",
        fontSize: "large",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
