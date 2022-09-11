import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  min-height: 30px;
  width: 100%;
  background: #512;
  font-family: Hussar, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  cursor: pointer;
`;

const Button = ({ callback }) => (
  <StyleButton onClick={callback}>Start Game</StyleButton>
);

export default Button;
