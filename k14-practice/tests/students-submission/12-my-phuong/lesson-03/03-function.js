// Function
// BT1
function multiply(a, b) {
    const result = a * b;
    console.log(`Ket qua cua ${a} * ${b} = ${result}`);
}
multiply(2, 3);
multiply(4, 5);

// BT2
function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    if (b < a && b < c) {
        return b;
    }
    if (c < a && c < b) {
        return c;
    }
}
console.log("\nKet qua findMin (4, 3, 2): ", findMin(4, 3, 2));
console.log("Ket qua findMin (5, -1, 6): ", findMin(5, -1, 6));

// BT3
const students = [
    { "name": "Andy", score: 8 },
    { "name": "Binh", score: 9 },
    { "name": "Chau", score: 10 }
]
const threshold = 9;
function getTopStudents(students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);        
        }
    }
    return topStudents;
}
console.log("\n[BT3] Danh sach sinh vien co diem tren " + threshold + ":", getTopStudents(students, threshold));

// BT4
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years / 100;
}
console.log("\n[BT4] Ket qua la: ", calculateInterest(10000, 5, 2));
