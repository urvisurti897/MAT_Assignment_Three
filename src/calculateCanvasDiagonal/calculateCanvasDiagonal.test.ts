import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  test('should calculate diagonal correctly for positive values', () => {
    const result = calculateCanvasDiagonal(2, 4);

    expect(result).toEqual(12);
  });

  test("should throw an error if length is negative", () => {
    expect(() => calculateCanvasDiagonal(-2, 4)).toThrow("Length should be positive");
  });

  test("should throw an error if width is negative", () => {
    expect(() => calculateCanvasDiagonal(2, -4)).toThrow("Width should be positive");
  });

  test.todo("should throw an error if length is zero");
  test.todo("should throw an error if width is zero");
  test.todo("should throw an error if length is non-numeric");
  test.todo("should throw an error if width is non-numeric");
});
