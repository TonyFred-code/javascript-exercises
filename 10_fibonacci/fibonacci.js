const fibonacci = function(memberIndex) {
    if (memberIndex < 0) {
        return "OOPS"
    }
    if (memberIndex === 0) return 0;

    let firstPrev = 1;
    let secondPrev= 0;

    for (let i = 2; i <= memberIndex; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};

// Do not edit below this line
module.exports = fibonacci;
