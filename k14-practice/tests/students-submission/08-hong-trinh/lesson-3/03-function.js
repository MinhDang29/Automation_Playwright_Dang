// cau1:
function multiple(a,b){
    const c = a *b;
    return c ;
}
let c = multiple(5,6);
console.log(c);


//cau 2:
function findMin(a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    if (b <= a && b <= c) {
        return b;
    }
    if (c <= a && c <= b) {
        return c;
    }
}
console.log(findMin(4, 1, 0));
console.log(findMin(8, 10, 12));

//câu 3
const students = [
    { "name": "An", "score": 467 },
    { "name": "Binh", "score": 987 },
    { "name": "Trinh", "score": 456 },
    { "name": "Nam", "score": 665 },
    { "name": "Ha", "score": 124 }
] 

function getTopStudents(students) {
    let top_students = []; 
    for(let i = 0; i < students.length; i++)
    if (students[i].score >= 500)
        top_students.push(students[i].name);
    return top_students;
    }
    console.log(getTopStudents(students));

//cau 4: 

function calculateInterest(principal,rate,years) {
    let total = principal + (principal * rate * years / 100);
    return total;
    }
    console.log(calculateInterest(100,5,6));
