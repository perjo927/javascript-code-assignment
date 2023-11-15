var assert = require('assert');

// Function to square numbers and categorize them
// Här tänkte jag att jag ville nog ändra detta till två olika funktioner först
// det skulle öka modulariteten och öka läsbarheten. Men jag säger det hellre 
// än att faktiskt göra det. Bättre att prata om det senare. 

function squareAndCategorizeNumbers(numbers) {
    let squaredNumbers = {
        odd: [],
        even: [],
    };

    for (let i = 0; i < numbers.length; i++) {
        const squared = numbers[i] * numbers[i];
        if (squared % 2 === 0) {
            squaredNumbers.even.push(squared);
        } else {
            squaredNumbers.odd.push(squared);
        }
    }

    return squaredNumbers;
}

// Calculate the sum of an array
const sum = (list) => list.reduce((acc, curr) => acc + curr, 0);

// Unit tests
// Nu ligger numbers här för det är egentligen test data
// Nu kallar du till funktionen i sig och testar med ett dataset istället för att göra
// det utanför testramen. På det viset är det tydligare vad vi gör och testar samt
// modulärt att ta ut funktionen och använda den någon annanstans. 
describe('Squared numbers', function () {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('should return odd numbers', function () {
        const squaredNumbers = squareAndCategorizeNumbers(numbers);
        assert.equal(sum([1, 9, 25, 49, 81]), sum(squaredNumbers.odd));
    });

    it('should return even numbers', function () {
        const squaredNumbers = squareAndCategorizeNumbers(numbers);
        assert.equal(sum([0, 4, 16, 36, 64]), sum(squaredNumbers.even));
    });
});
