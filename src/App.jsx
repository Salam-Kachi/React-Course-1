import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/header/Header";
import { useState } from "react";

const App = () => {
  // function sayHello() {
  //   console.log("Hello, World!");
  // }
  const sayHello = (name) => {
    console.log(`Hello ${name}!`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#282c34",
      }}
    >
      {/* <Header />
      <Form /> */}
      {/* <Button
        onClick={() => {
          console.log("Click Me Button");
        }}
      >
        <span>Click Me</span>
      </Button>
      <Button
        onClick={() => {
          console.log("Click Me Again Button");
        }}
      >
        <span>Click Me Again</span>
      </Button> */}
      <h1>Hello React</h1>
      const [count, setCount] = useState(0)
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default App;
