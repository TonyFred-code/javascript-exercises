const repeatString = function(string, num) {
    let result = "";

    if (num < 0) {
        return "ERROR";
    }

    if (string.trim() === "" || string.length === 0) {
        return "";
    }

    for (let i = 0; i < num; i++) {
        result += string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
