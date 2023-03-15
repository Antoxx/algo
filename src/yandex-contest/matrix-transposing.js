import assert from 'assert';

function transposeMatrix(matrix) {
  const newMatrix = [];
  const rowsCnt = matrix[0].length;
  const colsCnt = matrix.length;

  for (let i = 0; i < rowsCnt; i++) {
    for (let j = 0; j < colsCnt; j++) {
      if (!newMatrix[i]) {
        newMatrix[i] = [];
      }

      newMatrix[i][j] = matrix[j][i];
    }
  }

  return newMatrix;
}

function test(fn) {
  assert.deepStrictEqual(
    fn([
      [1, 2, 3],
      [0, 2, 6],
      [7, 4, 1],
      [2, 7, 0],
    ]),
    [
      [1, 0, 7, 2],
      [2, 2, 4, 7],
      [3, 6, 1, 0],
    ],
    fn.name,
  );
}

test(transposeMatrix);
