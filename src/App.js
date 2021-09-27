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
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;
/* Grey border color #847a6c */