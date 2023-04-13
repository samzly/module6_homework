function checkPrime(num) {
    if ((typeof num != 'number') || (isNaN(num)) || (!Number.isInteger(num)) || (num > 1000)) {
        return 'Data incorrect';
    } else if ((num == 0) || (num == 1)) {
        return `${num} less than 2`;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            let result = num % i;
            if (result == 0) {
                return `${num} is composite`;
            }
        }
    }
    return `${num} is prime`;
}