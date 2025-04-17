import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setFetchedData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  // console.log(fetchedData);
  return (
    <>
      <h1>Hello From React</h1>
      {JSON.stringify(fetchedData)}
    </>
  );
};

export default App;
