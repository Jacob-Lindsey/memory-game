import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>HEADER TITLE</HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
    background-color: #b40500;
    font-family: 'FormulaBold';
    font-size: 2rem;
    line-height: 5rem;
    margin-bottom: 6rem;
    padding: 0.5rem 1rem;
    width: 100%;
`;