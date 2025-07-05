import { useEffect, useState } from "react";
import "./App.css";
import MainPage from "./Containers/MainPage";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokeData, setPokeData] = useState([0]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=3")
      .then((data) => {
        setPokeData(data.data.results);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? <p>Loading...</p> : <MainPage pokeData={pokeData} />;
}

export default App;
