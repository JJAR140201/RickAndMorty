import React, { useEffect, useState } from "react";
import Navbars from "./components/Navbars";
import Characters from "./components/Characters";
import Paginacion from "./components/Paginacion";

function App() {
  const [characters, setCharacter] = useState([])
  const [info, setInfo] = useState({})
  const initialUrl ="https://rickandmortyapi.com/api/character"
  const fetchCharecter = (initialUrl) => {
    fetch(initialUrl)
      .then(response => response.json())
      .then((data) => {
        setCharacter(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharecter(initialUrl);
  }, [])

  const onPrevious = () => {
    fetchCharecter(info.prev)
  }

  const onNext = () => {
    fetchCharecter(info.next)
  }

  return (
    <>
    <Navbars brand="Rick and Morty" />
    <div className="container mt-5">
      <Paginacion prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
      <Characters characters={characters}/>
      <Paginacion/>
    </div>
    </>
  );
}

export default App;
