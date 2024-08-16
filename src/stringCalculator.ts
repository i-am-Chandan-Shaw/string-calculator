export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = ",";
  let numString = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers[2];
    numString = numbers.slice(delimiterEndIndex + 1);
  }

  const nums = numString
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map(num => parseInt(num, 10));

  const negativeNumbers = nums.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(",")}`);
  }

  return nums.reduce((a, b) => a + b, 0);
}
