import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    const result = calculateCanvasDiagonal("2", "4");

    expect(result).toEqual(12);
  });

  test.todo("should throw an error if length is negative");
  test.todo("should throw an error if width is negative");
  test.todo("should throw an error if length is zero");
  test.todo("should throw an error if width is zero");
  test.todo("should throw an error if length is non-numeric");
  test.todo("should throw an error if width is non-numeric");
});
