import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Drivers } from '../assets/Drivers';
import Shuffle from '../Shuffle';

function GameField() {
  return (
    <GameFieldWrapper>
        {Shuffle(Drivers).map(driver => {
          return <Card
                    key={driver.id}
                    url={driver.url}
                    name={driver.name}
                 />;
        })}
    </GameFieldWrapper>
  );
}

export default GameField;

const GameFieldWrapper = styled.div`
    align-items: stretch;
    display: grid;
    column-gap: 20px;
    height: 80%;
    row-gap: 3rem;
    grid-template-columns: repeat(4, minmax(120px, 1fr));
    grid-template-rows: repeat(5, minmax(120px, 1fr));
    justify-items: center;
    padding: 3rem 1rem 0 0;
    width: 85%;
`;