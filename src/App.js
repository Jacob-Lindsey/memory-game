import React, { useState } from 'react';
import styled from 'styled-components';
import AppContext from './AppContext';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

function App() {

  const [progress, setProgress] = useState([...Array(20).fill(false)]);
  const [progressCount, setProgressCount] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const gameContext = {
    progress,
    progressCount,
    gameWon,
    setProgress,
    setProgressCount,
    setGameWon,
  };


  return (
    <AppContext.Provider value={gameContext}>
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
    </AppContext.Provider>
  );
}

export default App;

const AppWrapper = styled.main`
  display: grid;
  grid-template-columns: minmax(1000px, 1400px);
  grid-template-rows: 7rem 1fr;
  justify-content: center;
  min-height: 100vh;
  row-gap: 1rem;
`;
/* Grey border color #847a6c */