function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Не число");
    }
    if (denominator === 0) {
        throw new Error("Ділення на нуль недопустиме!");
    }
    return numerator / denominator
}

try {
    const result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Робота завершена")
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Робота завершена")
}

try {
    const result = divide("test", 2);
    console.log(result);
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Робота завершена")
}

try {
    const result = divide(2, "test");
    console.log(result);
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Робота завершена")
}