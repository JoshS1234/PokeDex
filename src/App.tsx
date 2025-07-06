import { useEffect, useState } from "react";
import MainPage from "./Containers/MainPage";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
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
