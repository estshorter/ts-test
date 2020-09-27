function hello(name: string): string {
  return `Hello, ${name}!`;
}

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  const result: U[] = [];
  for (const val of array) {
    result.push(f(val));
  }
  return result;
}

console.log(map([1, 2, 3, 4, 5], (x) => 10 * x));

console.log(hello("World ff"));
console.log("test!!");
