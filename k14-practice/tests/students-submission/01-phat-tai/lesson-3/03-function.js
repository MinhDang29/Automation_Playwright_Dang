//1. Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau. 
function multiply(a, b) {
    const c = a * b;
    return c;
  }
  let nhan = multiply (5,6);
  console.log (nhan);
//2. Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau. 

function findMin(a, b, c) {
    let i = a;
    if (b < i) {
      i = b;
    }
    if (c < i) {
      i = c;
    }
    return i;
  }
  
  const min = findMin(1, 2, 3);
  console.log(`so nho nhat la ${min}`);



//3 


  function getTopStudents (students, threshold) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      if (student.score >= threshold) {
        topStudents.push(student.name);
      }
    }
    
    return topStudents;
    
  }
  const studentList = [
    { name: "Tai", score: 7 },
    { name: "Trau", score: 8 },
    { name: "Bo", score: 9 },
    { name: "Meo Meo", score: 5 },
    { name: "j97", score: 10 },
  ];
  const ketqua = getTopStudents(studentList,9);
  console.log("nhung hoc sinh co diem cao hon (>= 9)" +  ketqua );


//5
function calculateInterest(principal, rate, years) {
    const total = principal + (principal * rate * years) / 100;
    return total;
  }
  let tienLai = calculateInterest (5000000, 5, 2)
  console.log("Tong goc va lai la :" + tienLai); 

  
 
