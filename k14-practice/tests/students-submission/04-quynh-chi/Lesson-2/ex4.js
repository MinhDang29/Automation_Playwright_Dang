let height = 155; // Tính theo cm
let heightRemainder = height % 100; // Số lẻ của chiều cao: Lấy phần dư của chiều cao
let idealWeight = (heightRemainder * 9) / 10; // Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
let maxWeight = heightRemainder; // Cân nặng tối đa = Số lẻ của chiều cao (tính bằng cm)
let minWeight = (heightRemainder * 8) / 10; // Cân nặng tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10
console.log(
  "Cân nặng lý tưởng: " +
    idealWeight +
    "; Cân nặng tối đa: " +
    maxWeight +
    "; Cân nặng tối thiểu: " +
    minWeight
);
