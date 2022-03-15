function sayHello() {
    alert("Hello!");
}
function sayGoodbye() {
    alert("Goodbye :(");
}
function updateSum() {
    const numberOneInput = document.getElementById("number-1-input");
    const numberTwoInput = document.getElementById("number-2-input");
    const numberOne = Number(numberOneInput.value);
    const numberTwo = Number(numberTwoInput.value);
    const sum = numberOne + numberTwo;
    const sumElement = document.getElementById("sum-output");
    sumElement.innerText = sum;
}