import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: "chocolate",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
