function countNumbers(firstNumber, secondNumber) {
    const interval = setInterval(() => {
        if (firstNumber <= secondNumber) {
            console.log(firstNumber);
            firstNumber++
        } else {
            clearInterval(interval)
        }
    },1000)
}
countNumbers(10, 15)