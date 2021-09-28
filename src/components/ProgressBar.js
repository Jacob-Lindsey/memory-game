import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import AppContext from '../AppContext';

function ProgressBar() {

    const gameContext = useContext(AppContext);

    useEffect(() => {
        if (gameContext.progressCount === 20) {
            gameContext.setGameWon(true);
        }
        if (gameContext.gameWon) {
            alert('YOU WIN!');
        }
    });

    return (
    <ProgressBarWrapper>
        {gameContext.progress.map((cell, i) => {
            if (cell) {
                return <FilledCell key={i} />
            } else {
                return <Cell key={i} />
            }
        })}
    </ProgressBarWrapper>
    );
}

export default ProgressBar;

const ProgressBarWrapper = styled.div`
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: 1fr;
    height: 1.2rem;
    margin-top: auto;
    width: 70%;
`;

const Cell = styled.div`
    border: 1px solid rgb(221, 221, 221, 0.3);
`;

const FilledCell = styled.div`
    background-color: #00c800; 
    border: 1px solid rgb(221, 221, 221, 0.3);
`;