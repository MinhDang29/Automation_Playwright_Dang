//Câu 1:
function multiply(a, b) { console.log(a * b); }
multiply(2, 5);

// Câu 2:
function findMin(a, b, c) {
    if (a <= b && a <= c) { console.log(a); }
    if (b <= a && b <= c) { console.log(b); }
    if (c <= a && c <= b) { console.log(c); }
}
findMin(3, 4, 5);
findMin(6, 4, 5);
findMin(6, 4, 1);

// Câu 3:

// Câu 4:
function calculateInterest(principal, rate, years) { total = principal + principal * rate * years / 100; return console.log(total); }
calculateInterest(2, 1, 2);