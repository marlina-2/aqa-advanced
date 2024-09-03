function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback(number);
    } else oddCallback(number);
}

const handleEven = (number) => {
    console.log(`${number} number is even`)
}

const handleOdd = (number) => {
    console.log(`${number} number is odd`)
}

handleNum(5, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);
