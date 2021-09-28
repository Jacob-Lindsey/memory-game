import React from 'react';
import styled from 'styled-components';
import GameField from './GameField';
import Score from './Score';

function Main() {
  return (
    <MainWrapper>
        <Score />
        <GameField />
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin: 0 auto;
    margin-top: 9rem;
    padding-bottom: 41rem;
    width: 100%;
`;
