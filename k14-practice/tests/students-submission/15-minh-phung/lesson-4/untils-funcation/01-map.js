const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3];
const expenses = [50, 100, 150];

//4.1 Từ scores, tạo mảng mới: tăng 10% nếu <90, giảm 5% nếu >=90
const newArr = scores.map(score => {
    if (score < 90) {
        return score + 0.1 * score;
    }
    else {
        return score - 0.05 * score
    }
});

console.log(newArr);


//4.2 Từ numbers = [1,2,3], chuyển thành mảng chuỗi
const changeType = numbers.map(number => number.toString());
console.log(changeType);

//4.3 Từ numbers = [1,2,3], nhân đôi giá trị
const doubleValue = numbers.map((number) => number * 2);
console.log(doubleValue);