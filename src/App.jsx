import "./App.css";
import { useState, useEffect } from "react";
const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setFetchedData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <>
      <h1>Hello From React</h1>
      <ul>
        {fetchedData.slice(0, 9).map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img src={item.url} alt={item.title} width="100px" height="100px" />
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
