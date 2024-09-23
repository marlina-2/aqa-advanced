function printTextWithDelay(text, delay) {
    setTimeout(() =>
        console.log(text), delay)
}

printTextWithDelay("La-la-la", 1000);