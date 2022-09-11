import React from 'react';
import { StyleCell } from './styles/StyleCell';
import { TETROMINOS } from '../tetrominos';

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyleCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyleCell>
);

export default React.memo(Cell);
