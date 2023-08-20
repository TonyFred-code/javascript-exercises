const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase().replace(/\W/g, "");
    if (lowerCaseString === lowerCaseString.split("").reverse("").join("")) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
