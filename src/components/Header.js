import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <HeaderLogo src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg" />
        <HeaderText>&nbsp;&nbsp;MEMORIZER</HeaderText>
        </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  background-color: #b40500;
  font-family: 'FormulaBold';
  line-height: 5rem;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
`;

const LogoWrapper = styled.span`
  display: flex;
  margin-top: 20px;
  margin-left: 33%;
  width: 160px;
`;

const HeaderLogo = styled.img`
  line-height: normal;
  clip-path: polygon(0% 0%, 0% 100%, 50% 100%, 100% 51%, 100% 0%);
`;

const HeaderText = styled.p`
  font-family: 'FormulaBlack';
  font-size: 3rem;
  font-style: italic;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;

`;