const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    if (Number.isNaN(num1) || typeof num1 !== "number") {
        return "ERROR"
    }

    if (Number.isNaN(num2) || typeof num2 !== "number") {
        return "ERROR"
    }

    let min = 0,
        max = 0,
        sum = 0;

    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
