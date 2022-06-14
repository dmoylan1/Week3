//  *** Arrays ***

// var colors = [];
// colors.push('Red');
// colors.push('Orange');
// colors.push('Yellow');
// colors.push('Green');
// colors.push('Blue');
// colors.push('Purple');

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// for (names of colors) {
//     console.log(names);
// }


// *** Functions ***

// function myFunction () {
//     for (i=0; i<100; i++) {
//         console.log(i);
//     }
// }

// myFunction();

// *** Intermediate Array Methods ***
// *** Maps *** 

let names = ['Danielle', 'Dan', 'Chloe', 'Jacob'];
let lengths = names.map(function(element) {
    return element.length;
});

console.log(lengths);

console.log('break');
let veggies = ['cucumber', 'carrot', 'tomato', 'bean', 'pea', 'corn'];
let charactercount = veggies.map(function(x) {
    return x.length;
});

console.log(charactercount);

// *** Reduce ***

let sum = charactercount.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 10); // starts counting at 10

console.log(sum);

// *** For each ***

names.forEach(function(element) {
    console.log(element);
});

// *** Filter ***

let evens = names.filter(function(element) {
    return element.length % 2 == 0;
});
console.log(evens);