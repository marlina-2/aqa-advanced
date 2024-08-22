function checkOrder(available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.");
    } else if (ordered === 0) {
        console.log("Your order is empty");
    } else if (available >= ordered) {
        console.log("Your order is accepted");
    }
}

checkOrder(10, 11);
checkOrder(10, 0);
checkOrder(10, 9);
checkOrder(10, 10);
