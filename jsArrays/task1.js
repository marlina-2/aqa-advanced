const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        zeroCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        positiveCount++;
    }
}
console.log(`Кількість нульових чисел: ${zeroCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість позитивних чисел: ${positiveCount}`);