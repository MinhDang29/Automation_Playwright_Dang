const Nhung = {
    name: "Nhung", 
    age: 20,
    job_title: "Tester"
}

const Tai = {
    name: "Tai", 
    age: 24,
    job_title: "Dev"
}

const Nhi = {
    name: "Nhi", 
    age: 20,
    job_title: "Student"
}

class K14StudentPlaywright {
    // thuoc tinh 
    name;
    age;
    job_title;
    score;

    constructor(name, age, job_title) {
        this.name = name;
        this.age = age;
        this.job_title = job_title;
    }

    // Phuong thuc = Method
    doExercise() {
        console.log("Do exercise")
    };

    sum(a, b) {
        return a + b;
    }
};

const Trinh = new K14StudentPlaywright("Trinh", 22, "Tester");
// Trinh.name = "Trinh";
// Trinh.age = 22;
// Trinh.job_title = "Tester";
Trinh.score = 100;

Trinh.doExercise();
const result = Trinh.sum(6, 8);
console.log(result);

console.log(Trinh)