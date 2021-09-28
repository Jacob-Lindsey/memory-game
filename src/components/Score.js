import React from 'react';
import styled from 'styled-components';
import Timer from './Timer';
import ProgressBar from './ProgressBar';

function Score() {

  let timeDelta = '00:00:0';

  return (
    <ScoreWrapper>
      <DeltaWrapper>
        <Timer />
        <BestScore>Best :&nbsp;&nbsp;{timeDelta}</BestScore>
      </DeltaWrapper>
      <ProgressBar />
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
    flex-direction: column;
    height: 8rem;
    justify-content: space-evenly;
    margin-right: 1rem;
    width: 82%;
`;

const DeltaWrapper = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: 2.5rem;
    width: 80%;
`;

const BestScore = styled.div`
    font-family: 'FormulaBold';
    font-size: 2rem;
    text-align: center;
    text-indent: 4rem;
    width: 100%;
`;