import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        backgroundColor: "chocolate",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "10px",
        width: "100px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
