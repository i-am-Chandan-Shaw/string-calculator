// src/stringCalculator.ts

/**
 * Adds numbers from a string, supporting custom delimiters and new lines.
 * @param numbers - A string of numbers separated by commas, new lines, or custom delimiters.
 * @returns The sum of the numbers.
 * @throws Error if negative numbers are present.
 */
export function add(numbers: string): number {
  if (numbers === "") return 0; // Handle empty string

  let delimiter = ","; // Default delimiter
  let numString = numbers; // Number string to process

  // Handle custom delimiter specification
  if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = numbers[2];
      numString = numbers.slice(delimiterEndIndex + 1);
  }

  // Replace new lines with delimiter and split string into numbers
  const nums = numString
      .replace(/\n/g, delimiter)
      .split(delimiter)
      .map(num => parseInt(num, 10));

  // Check for negative numbers
  const negativeNumbers = nums.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
  }

  return nums.reduce((a, b) => a + b, 0); // Return the sum
}
