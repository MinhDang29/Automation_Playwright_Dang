const scores = [85, 90, 78];
const numbers = [1, 2, 3];

//Yeu cau 1
const newScores = scores.map(score => {
    if (score < 90) return score * 1.1
    if (score >= 90) return score * 0.95
})
console.log(newScores);

//Yeu cau 2
const chuoiNum = numbers.map(num => num.toString());
console.log(chuoiNum);

//Yeu cau 3
const dupNum = numbers.map(num => num * 2);
console.log(dupNum);
