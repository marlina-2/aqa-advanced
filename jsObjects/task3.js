const car1 = {
    brand: "Mercedes-Benz",
    model: " Mercedes-Benz",
    year: 2024
}

const car2 = {
    brand: "Land Rover",
    model: "Defender",
    owner: 2023
}

const car3 = {...car1, ...car2};
console.log(car3);
