const findTheOldest = function(array) {
    let oldest = array[0];

    for (let i = 1; i < array.length; i++) {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let person = array[i]
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        if (personAge > oldestAge) {
            oldest = person;
        }
    }

    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
