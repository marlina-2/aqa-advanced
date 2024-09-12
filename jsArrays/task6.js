const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const sortedNumbersList = Array.from(numbersList);
sortedNumbersList.sort((a, b) => a - b);
console.log("Оригінальний масив:", numbersList);
console.log("Відсортований масив:", sortedNumbersList);