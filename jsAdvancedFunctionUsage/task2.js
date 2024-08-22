function recursive(num) {
    if (num <= 0) {
        console.log(num);
    } else {
        console.log(num);
        recursive(num - 1)
    }
}

recursive(5);
