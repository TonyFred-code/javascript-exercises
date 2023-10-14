const removeFromArray = function(array, ...args) {
    let arrLength = array.length;
    let newArray = [];

    for (let i = 0; i < arrLength; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
