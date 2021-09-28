import React, { useState, useEffect, useRef, useContext } from 'react';
import AppContext from '../AppContext';
import styled from 'styled-components';
import backgroundImage from '../images/image-1.png';

function Card(props) {

  const cardRef = useRef();

  const [clicked, setClicked] = useState(false);

  const gameContext = useContext(AppContext);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);

      // Find the first falsy value in the array
      let findCell = gameContext.progress.indexOf(false);
      let tempArray = [...gameContext.progress];

      // Set the next falsy value to true
      tempArray[findCell] = true;
      gameContext.setProgress(tempArray);
      gameContext.setProgressCount(gameContext.progressCount + 1)   
    } else {
      alert('Game Over!');
    }
    setClicked(true);
  }

  useEffect(() => {
    const currentCardRef = cardRef.current;
    cardRef.current.addEventListener('click', handleClick);
    return () => currentCardRef.removeEventListener('click', handleClick);
  });

  return (
    <CardWrapper ref={cardRef}>
      <CardBackground />
      <DriverImageWrapper>
        <DriverImage src={props.url} />
        <DriverName>{props.name}</DriverName>
      </DriverImageWrapper>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  border-right: 2px solid #847a6c;
  border-top: 2px solid #847a6c;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 0px 0px transparent;
  clip-path: inset(0px 0px 0px 0px);
  display: flex;
  padding-top: 0;
  padding-left: 10px;
  padding-right: 12px;
  width: 75%;
  transition: all 0.4s ease;
  &:hover {
    > picture > p {
        border-bottom: 1px solid rgba(225,225,225,0.8);
      }
    border-right: 2px solid #b40500bf;
    border-top: 2px solid #b40500bf;
    box-shadow: 0px 0px 10px 4px rgba(180,6,0,0.55);
    clip-path: inset(-15px -15px 0px 0px);
    cursor: pointer;
  }
`;

const CardBackground = styled.div`
  align-self: flex-end;
  background-image: url(${backgroundImage});
  background-repeat: repeat;
  background-size: 8px;
  display: block;
  height: 80%;
  position: relative;
  width: 100%;
`;

const DriverImageWrapper = styled.picture`
  display: flex;
  justify-content: center;
  position: absolute;
`;

const DriverImage = styled.img`
  margin-right: 10%;
  width: 57.1%;
`;

const DriverName = styled.p`
  background-color: #181a1bdd;
  border-bottom: 0px solid transparent;
  bottom: 0;
  font-family: 'FormulaRegular';
  font-size: 1rem;
  left: 0;
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  position: absolute;
  text-indent: 0.5rem;
  transition: all 0.4s ease;
  width: 90%;
`;