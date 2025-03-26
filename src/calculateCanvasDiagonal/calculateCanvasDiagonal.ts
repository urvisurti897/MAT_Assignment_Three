export default function calculateCanvasSize(
  length: number,
  width: number
) {
  if (typeof length !== 'number' || typeof width !== 'number') {
    throw new Error("Both length and width should be numbers");
  }

  if (length < 0){
    throw new Error("Length should be positive");
  }

  if (width < 0){
    throw new Error("Width should be positive");
  }

  return 2 * (length + width);
}
