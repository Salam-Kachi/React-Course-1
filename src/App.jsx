import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Hello From React</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "none",
          marginBottom: "20px",
        }}
      />
      <h1>Your Name is : {input} </h1>
    </div>
  );
};

export default App;
