const removeFromArray = function(array, ...args) {
    let argsLength = args.length;

    for (let i = 0; i < argsLength; i++) {
        let arrayLength = array.length;
        for (let j = 0; j < arrayLength; j++) {
            if (args[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
