var assert = require('assert');

console.log("Hello World!")

// ASSIGNMENT CODE BEGIN //
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let squaredEvenNumbers = [];
const squaredOddNumbers = [];

function squareNumbers() {
    for (i = 0; i < numbers.length; i++) {
        if (i % 2 == 0) {
            squaredEvenNumbers.push(numbers[i] * numbers[i]);
        } else {
            squaredOddNumbers.push(numbers[i] * numbers[i]);
        }
    }

    return
    {
        odd: squaredOddNumbers,
            even: squaredEvenNumbers,
  };
}

const squares = squareNumbers();
// ASSIGNMENT CODE END //

// DEBUG HELPER //
console.table(squares);

// Should produce the following result:
// ┌─────────┬───┬───┬────┬────┬────┐
// │ (index) │ 0 │ 1 │ 2  │ 3  │ 4  │
// ├─────────┼───┼───┼────┼────┼────┤
// │   odd   │ 1 │ 9 │ 25 │ 49 │ 81 │
// │  even   │ 0 │ 4 │ 16 │ 36 │ 64 │
// └─────────┴───┴───┴────┴────┴────┘

// UNIT TESTS //
// These tests must pass! But feel free to refactor :)
describe('Squared numbers', function () {
    const sum = (list) => list.reduce((acc, curr) => acc + curr, 0);

    it('should return odd numbers', function () {
        assert.equal(sum([1, 9, 25, 49, 81]), sum(squares.odd));
    });
    it('should return even numbers', function () {
        assert.equal(sum([0, 4, 16, 36, 64]), sum(squares.even));
    });
});
