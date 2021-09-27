import React from 'react';
import styled from 'styled-components';

function Score() {
  return (
    <ScoreWrapper>
        <CurrentScore>Score: </CurrentScore>
        <BestScore>Best: </BestScore>
    </ScoreWrapper>
  );
}

export default Score;

const ScoreWrapper = styled.div`
    align-items: center;
    border-right: 10px solid #847a6c;
    border-top: 10px solid #847a6c;
    border-top-right-radius: 25px;
    display: flex;
    flex-direction: row;
    height: 8rem;
    justify-content: space-evenly;
    margin-right: 1rem;
    width: 82%;
`;

const CurrentScore = styled.div`
    font-family: 'FormulaBold';
    font-size: 2rem;
`;

const BestScore = styled.div`
    font-family: 'FormulaBold';
    font-size: 2rem;
`;