const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return "ERROR"
    }

    if (Number.isNaN(min) || typeof min !== "number") {
        return "ERROR"
    }

    if (Number.isNaN(max) || typeof max !== "number") {
        return "ERROR"
    }

    if (min > max) {
        const temp = max
        max = min;
        min = temp;
    }

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
