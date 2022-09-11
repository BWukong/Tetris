export const TETROMINOS = {
  0: { shape: [[0]], color: '0, 0, 0' },
  A: {
    shape: [[0, 'A', 0, 0], [0, 'A', 0, 0], [0, 'A', 0, 0], [0, 'A', 0, 0]],
    color: '39, 35, 36',
  },
  B: { shape: [[0, 'B', 0], [0, 'B', 0], ['B', 'B', 0]], color: '131, 183, 153' },
  C: {
    shape: [[0, 'C', 0], [0, 'C', 0], [0, 'C', 'C']],
    color: '226, 205, 109',
  },
  D: { shape: [['D', 'D'], ['D', 'D']], color: '194, 178, 143' },
  E: { shape: [[0, 'E', 'E'], ['E', 'E', 0], [0, 0, 0]], color: '228, 216, 180' },
  F: {
    shape: [[0, 0, 0], ['F', 'F', 'F'], [0, 'F', 0]],
    color: '232, 111, 104',
  },
  G: { shape: [['G', 'G', 0], [0, 'G', 'G'], [0, 0, 0]], color: '251,46,1' },
};

export const randomTetromino = () => {
  const tetrominos = 'ABCDEFG';
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
