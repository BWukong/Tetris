import styled from 'styled-components';

export const StyleDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 25px 0;
  padding: 20px;
  border: 4px solid #512;
  min-height: 30px;
  width: 100%;
  color: ${props => (props.gameOver ? 'white' : '#999')};
  background: #000;
  font-family: Hussar, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
