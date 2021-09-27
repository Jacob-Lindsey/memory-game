import React from 'react';
import styled from 'styled-components';

function Card() {
  return (
    <CardWrapper></CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
    border-right: 2px solid #847a6c;
    border-top: 2px solid #847a6c;
    border-top-right-radius: 10px;
    padding-top: 0;
    padding-left: 10px;
    padding-right: 10px;
    width: 75%;
`;