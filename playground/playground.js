const continents = ["Asia", "Australia", "Europe", "Africa", "North America", "South America", "Antarctica"];

for (let i = 0; i < continents.length; ++i) {
    console.log(i + " " + continents[i]);
}

// multiple variables
for (let exp = 1, pow = 2; exp <= 10; ++exp, pow *= 2) {
    console.log('2 to the ' + exp + 'th power is ' + pow + '.');
}

for (const i in continents) {
    console.log(i + " " + continents[i]);
}

// loop through dictionary
const person = {initials: 'DR', age: 40, job: 'Professor'};
for (const key in person) {   // key
    console.log(key + " = " + person[key]);
}

// for..of
for (const v of continents) { // value
    console.log(v);
}

// while
let i = 10;
while (i > 0) {
    console.log(i);
    --i;
}

// do..while
let j = 0;
do {
    console.log(j);
    ++j;
} while (j < 10);
