import React from 'react';
import styled from 'styled-components';
import Main from './components/Main';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
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