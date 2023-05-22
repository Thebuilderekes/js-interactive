// The following function calculates the area and volume
// of a box

function calculate(width, height, depth) {
  const area = width * height;
  const volume = width * height * depth;
  const sizes = [area, volume];

  return sizes;
}

// since the return value is the sizes array after calling the function,
// We then use the array [] to pick the index
// to target area and volume [0] and [1]
//
const area1 = calculate(3, 4, 2)[0];
const volume2 = calculate(5, 8, 1)[1];

console.log(area1);
