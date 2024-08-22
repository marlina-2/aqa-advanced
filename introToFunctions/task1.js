function rectangleAreaFunctionDeclaration(width, height) {
    return width * height;
}

console.log("Function declaration. Площа прямокутника: " + rectangleAreaFunctionDeclaration(5, 10));

const rectangleAreaFunctionExpression = function (width, height) {
    return width * height;
}
console.log("Function expression. Площа прямокутника: " + rectangleAreaFunctionExpression(5, 10));

const rectangleAreaArrowFunction = (width, height) => width * height;
console.log("Arrow function expression. Площа прямокутника: " + rectangleAreaArrowFunction(5, 10));