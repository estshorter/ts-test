type HasSides = { numOfSlides: number };
type SidesHaveLength = { sideLength: number };

function logPerimeter<Shape extends HasSides & SidesHaveLength>(
  s: Shape
): Shape {
  console.log(s.numOfSlides * s.sideLength);
  return s;
}

type Square = HasSides & SidesHaveLength;
const square: Square = { numOfSlides: 4, sideLength: 3 };
logPerimeter(square);
