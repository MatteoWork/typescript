const count: number = 10;
const number: number[] = findNumbers(count);
console.log(number.join(' '));

function isFibonacci(num: number): boolean {
  // Check if a number is in the Fibonacci sequence
  let a: number = 0, b: number = 1;
  while (b < num) {
    let temp: number = b;
    b = a + b;
    a = temp;
  }
  return b === num;
}

function isPrime(num: number): boolean {
  // Check if a number is prime
  if (num <= 1) return false;
  for (let i: number = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function findNumbers(count: number): number[] {
  // Find numbers
  let result: number[] = [];
  let num: number = 2;

  while (result.length < count) {
    if (!isFibonacci(num) && !isPrime(num)) {
      result.push(num);
    }
    num++;
  }

  return result;
}