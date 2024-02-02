function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

function checkPrimes(list) {
    if (!Array.isArray(list) || list.length === 0) {
        console.log("The list is empty or not an array.");
        return;
    }

    list.forEach(num => {
        if (isPrime(num)) {
            console.log(`${num} is a prime number.`);
        } else {
            console.log(`${num} is not a prime number.`);
        }
    });
}

// Example usage
const numbers = [2, 3, 4, 5, 11, 13, 17, 19];
checkPrimes(numbers);
