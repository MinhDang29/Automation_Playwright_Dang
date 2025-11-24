const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 3.1 Tìm giá trị đầu tiên trong scores > 80.
const firstScoreAbove80 = scores.find((score) => score > 80);
console.log(`Giá trị đầu tiên trong scores > 80: ${firstScoreAbove80}`);

// 3.2 Tìm giá trị đầu tiên trong ages > 20.
const firstAgeAbove20 = ages.find((age) => age > 20);
console.log(`Gias tri đầu tiên trong ages > 20: ${firstAgeAbove20}`);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5.
const firstWordLongerThan5 = words.find((word) => word.length > 5);
console.log(`Từ đầu tiên trong words có độ dài > 5: ${firstWordLongerThan5}`);
