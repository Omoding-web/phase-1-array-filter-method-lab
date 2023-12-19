// Code solution to define findMatching, fuzzyMatch, matchName that uses filter()
function findMatching(drivers, name) {
    return drivers.filter(drivers => drivers.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(drivers => drivers.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName(drivers, name) {
    return drivers.filter(drivers => drivers.name.toLowerCase() === name.toLowerCase());
}

const driversArray = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

console.log(findMatching(driversArray, 'Bobby'));
console.log(findMatching(driversArray, 'Sammy'));
console.log(findMatching(driversArray, 'Susan'));

console.log(fuzzyMatch(driversArray, 'Sa'));
console.log(fuzzyMatch(driversArray, 'y'));
console.log(fuzzyMatch(driversArray, 'mm'));

const driversObjects = [
    {name: 'Bobby', hometown: 'Pittsburgh'},
    {name: 'Sammy', hometown: 'New York'},
    {name: 'Sally', hometown: 'Cleveland'},
    {name: 'Annette', hometown: 'Los Angelse'},
    {name: 'bobby', hometown: 'Tampa Bay'},
];

console.log(matchName(driversObjects, 'Bobby'));