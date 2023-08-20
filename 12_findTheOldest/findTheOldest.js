const findTheOldest = function(array) {
    let oldest = array[0];

    for (let i = 1; i < array.length; i++) {
        let oldestBirthYear = oldest.yearOfBirth;
        let oldestDeathYear = oldest.yearOfDeath || 2023;
        let oldestAge = oldestDeathYear - oldestBirthYear;
        let person = array[i]
        let personBirthYear = person.yearOfBirth;
        let personDeathYear = person.yearOfDeath || 2023;
        let personAge = personDeathYear - personBirthYear;
        if (personAge > oldestAge) {
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
