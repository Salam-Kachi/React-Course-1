import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Header from "./components/header/Header";

const App = () => {
  // function sayHello() {
  //   console.log("Hello, World!");
  // }
  const sayHello = (name) => {
    console.log(`Hello ${name}!`);
  };

  return (
    <>
      {/* <Header />
      <Form /> */}
      <button type="button" onClick={(e) => sayHello("Karim")}>
        Click Me
      </button>
    </>
  );
};

export default App;
