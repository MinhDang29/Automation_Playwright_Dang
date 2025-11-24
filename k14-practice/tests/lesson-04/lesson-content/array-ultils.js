//Map
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.map(num => num * 2);
// console.log(numbers); 

// Filter
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.filter(num => num % 2 === 0);
// console.log(newNumbers); 

// Find
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.find(num => num % 2 === 0);
// console.log(newNumbers); 

// Reduce
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 3);
// console.log(numbers); 

// Some
// let numbers = [1, 2, 3, 4];
// let hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); 

// Every
// let numbers = [1, 2, 3, 4];
// let allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven); 

// Shift
// let number = [1, 2, 3];
// let firstElement = number.shift();
// console.log(number);
// console.log(firstElement);

// Sort()
// let number = [1, 10, 2, 21, 100];
// number.sort();
// console.log(number);

// Tang dan
// compareFn = (a, b) => a - b
// // Giam dan
// compareFn = (a, b) => b - a

// if a - b || b - a < 0 => a dung trc b
// if a - b || b - a > 0 => b dung trc a

// let number = [1, 10, 2, 21, 100];
// number.sort((a, b) => b - a);
// Lan 1: [1, 10, 2, 21, 100];
// Lan 2: [1, 2, 10, 21, 100];
// console.log(number);

function checkIfEveryWordIsLongerThan3(arr) {
    return arr.every((e) => e.length > 3);
}

const words = ['apple', 'banana', 'cherry', 'date'];
console.log(checkIfEveryWordIsLongerThan3(words));

function decryptCode(code){
    let decrypt = '';
    for (let char of code){
        if (char === char.toLowerCase()){
            decrypt += char.toUpperCase();
        } else {
            decrypt += char.toLowerCase();
        }
    }
    return decrypt;
}