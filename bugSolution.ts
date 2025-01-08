function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle cases where parsing fails
  }

  return numA + numB;
}

function subtractSafe(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle cases where parsing fails
  }
  return numA - numB;
}

const result1 = add(5, 3); // Returns 8
const result2 = subtract(10, 4); // Returns 6
const result3 = addSafe("5", "3"); // Returns 8
const result4 = subtractSafe("10", 4); // Returns 6
const result5 = addSafe("abc", 3); // Returns 0

console.log(result1); // Output: 8
console.log(result2); // Output: 6
console.log(result3); // Output: 8
console.log(result4); // Output: 6
console.log(result5); //Output: 0