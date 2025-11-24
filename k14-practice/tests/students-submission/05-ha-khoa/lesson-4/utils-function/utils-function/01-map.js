const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150]

4.1
let newScore = scores.map(
    scores => {
        if (scores < 90) {
            return scores * 1.1;
        }
        else {
            return scores * 0.95;
        }
    }
);
console.log(newScore);

4.2
let stringNum = numbers.map(String);
console.log(stringNum);

4.3
let doubleNum = numbers.map(num => num*2);
console.log(doubleNum);