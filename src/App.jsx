import "./App.css";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
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
      <h1>Hello React</h1>
      <Button text="Increment " onClick={() => setCount(count + 1)} />
      <Button text="Decrement" onClick={() => setCount(count - 1)} />
      <Button text="Reset" onClick={() => setCount(0)} />
      <Button text="Double" onClick={() => setCount(count * 2)} />
      <span>You clicked {count} times</span>
    </div>
  );
};

export default App;
