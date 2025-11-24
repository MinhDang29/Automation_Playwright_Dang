let height = 170;
let idealWeight;
let maximumWeight;
let minimumWeight;

maximumWeight = height % 100;
idealWeight = (maximumWeight * 9) / 10;
minimumWeight = (maximumWeight * 8) / 10;

console.log(
  "Can nang ly tuong: " +
    idealWeight +
    "cm" +
    " Can nang toi da: " +
    maximumWeight +
    "cm" +
    " Can nang toi thieu: " +
    minimumWeight +
    "cm"
);
