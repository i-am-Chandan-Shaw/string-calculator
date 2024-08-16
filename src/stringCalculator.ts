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
  return nums.reduce((a, b) => a + b, 0);
}
