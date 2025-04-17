import { useState } from "react";

const App = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <h1>Hello From React</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.username && input.password) {
            alert(`Username: ${input.username}, Password: ${input.password}`);
          } else {
            alert("Please fill in both fields.");
          }
        }}
      >
        <div>
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={input.username}
            onChange={(e) => {
              setInput(...input, (input.username = e.target.value));
            }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={(e) => {
              setInput(...input, (input.password = e.target.value));
            }}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
