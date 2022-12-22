import React, { useEffect, useState } from "react";
import Navbars from "./components/Navbars";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacter] = useState([])
  const initialUrl ="https://rickandmortyapi.com/api/character"
  const fetchCharecter = (initialUrl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then(data => setCharacter(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharecter(initialUrl);
  }, [])

  return (
    <>
    <Navbars brand="Rick and Morty" />
    <div className="container mt-5">
      <Characters characters={characters}/>
    </div>
    </>
  );
}

export default App;
