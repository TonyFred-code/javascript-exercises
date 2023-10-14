const fibonacci = function(memberIndex) {
    if (memberIndex < 0) {
        return "OOPS"
    }
    if (memberIndex === 0) return 0;

    let sequence = [1, 1];

    for (let i = 2; i < memberIndex; i++) {
        let prevTerm = sequence[i - 1];
        let beforePrevTerm = sequence[i - 2];
        let term = prevTerm + beforePrevTerm;
        sequence.push(term);
    }

    return sequence.pop();

};

// Do not edit below this line
module.exports = fibonacci;
