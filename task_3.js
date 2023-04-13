function getFirstAndSum(firstNumber) {
    return function getSecond(secondNumber) {
        return (firstNumber + secondNumber);
    }
}
console.log(getFirstAndSum(12)(34))