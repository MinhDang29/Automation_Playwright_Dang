const scores = [85, 90, 78];
//2.1 Kiem tra score co gia tri >80
if (scores.some(number => number > 80)) {
    console.log("Score có giá trị >80")
}

//2.2 Lọc các giá trị trong age <18
const ages = [18, 21, 16, 25];
if (ages.some(number => number < 18)) {
    console.log("Age có giá trị <18")
}

//2.3 Lọc các từ trong word co dộ dài >5
const words = ["apple", "banana", "cherry", "date"];
if (words.some(number => number.length > 5)) {
    console.log("Words có từ có độ dài >5")
}