import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button,OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setscore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)
  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max-min)+min);
  };

  const rollDice = () =>{
    if(!selectedNumber) {
      setError("You have not Selected any Number")
      return;
    };
    const randomNumber=generateRandomNumber(1,7);
    setcurrentDice((prev) =>randomNumber); 


    if(selectedNumber === randomNumber){
      setscore((prev) => prev+randomNumber);
    }
    else{
      setscore((prev) => prev-2);
    }
    setSelectedNumber(undefined)
  }
  const resetScore = () =>{
    setscore(0);
  }
  return (
    <MainContainer>
        <div className='top_section'>
            <TotalScore score={score}/>
            <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={() => setShowRules(prev => !prev)}>
          {showRules ? "Hide" : "Show"}Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}


export default GamePlay

const MainContainer = styled.main`
padding-top: 17px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

    }

`