import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {
  const[isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamesPlay = () =>{
    setIsGameStarted((curr) => !curr); 
  }
  return (
    <>
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamesPlay}/>
      }
    </>
  );
};

export default App;
