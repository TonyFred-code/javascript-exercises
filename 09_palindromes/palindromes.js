const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase().replace(/\W/g, "");
    return lowerCaseString.split("").reverse().join("") === lowerCaseString;
};

// Do not edit below this line
module.exports = palindromes;
