function fiveMultiplication(limit) {
  for (let i = 1; i <= limit; i++) {
    let result = i * 5;
    console.log(`${i} * 5 = ${result}`);
  }
}

fiveMultiplication(10);

// Feature-table: in the feature-table branch, add another function that prints the numbers from 5 up to 10. Like: 5, 6, 7, 8, 9, 10. Use a for loop to achieve this.

function printNum(number) {
  for (let i = 5; i <= number; i++) {
    console.log(i);
  }
}

printNum(10);
