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