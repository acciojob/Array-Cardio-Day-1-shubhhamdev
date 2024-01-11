// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's and return the filtered array
export function myfilter() {
    return inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
}

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names (i.e. full name)
// Ex: For the first inventor the full name will be 'Albert Einstein'
export function map() {
    return inventors.map(inventor => `${inventor.first} ${inventor.last}`);
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest and return the sorted array
export function sort() {
    return inventors.sort((a, b) => a.year - b.year);
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// Return the total number of years all the inventors lived
export function reduce() {
    return inventors.reduce((totalYears, inventor) => totalYears + (inventor.passed - inventor.year), 0);
}

// 5. Sort the inventors by years lived and return the sorted array
export function sortbylived() {
    return inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
}

// 6. sort Exercise
// Sort the people alphabetically by last name and return the sorted array
export function sortByLastName() {
    return people.sort((a, b) => {
        const [aLast] = a.split(', ');
        const [bLast] = b.split(', ');
        return aLast.localeCompare(bLast);
    });
}

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

export function reducedSum() {
    return data.reduce((transportCounts, transport) => {
        transportCounts[transport] = (transportCounts[transport] || 0) + 1;
        return transportCounts;
    }, {});
}
