import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/image-1.png';

function Card(props) {
  return (
    <CardWrapper>
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
    border-right: 2px solid #b40500bf;
    border-top: 2px solid #b40500bf;
    box-shadow: 0px 0px 10px 4px rgba(180,6,0,0.47);
    clip-path: inset(-15px -15px 0px 0px);
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
  bottom: 0;
  font-family: 'FormulaRegular';
  font-size: 1rem;
  left: 0;
  margin: 0;
  margin-block-end: 0;
  margin-block-start: 0;
  position: absolute;
  width: 90%;
`;