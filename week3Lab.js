// let array1 = [1, 5, 6, 9, 10, 14];

// // print the 3rd element in array1
// console.log(array1[2]);
// // print the last element in array1
// console.log(array1[array1.length-2]);
// // add 16 and 3 to array1

// array1.push(16, 3);
// console.log(array1);

// // sort the array, then print the 3rd element again
// // did it change?

// array1.sort();
// console.log(array1[2]);
// console.log('break');
// console.log(array1);

// // create a variable called myTodoList that holds an empty array

// var myTodoList = [];
// myTodoList.push('clean', 'work', 'sleep');
// console.log(myTodoList);
// // add three todo items to the array using a built-in array method

// // remove the second item in the array
// let removedItem = myTodoList.splice(1, 1);
// console.log(myTodoList);
// // create another array, yourTodoList, and add two todo items
// var yourTodoList = ['play', 'eat'];
// console.log(yourTodoList);
// // create another array, ourTodoList
// // combine myTodoList and yourTodoList into ourTodoList
// var ourTodoList = myTodoList.concat(yourTodoList);
// console.log(ourTodoList);



// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed
let x = prompt('Enter value for x');
function reversal(x) {
    if (typeof(x) === 'boolean') {
        console.log(!x);
    } else if (typeof(x) === 'number' || typeof(x) === 'string') {
        let splitElement = x.split("");
        let reverseElement = splitElement.reverse(); 
        console.log(reverseElement);}
    else  console.log(x.reverse(""));
    }
        



// create a function called addingMachine that will add all passed numbers and return the total
// // Note: you don't know how many numbers will be passed

// function addingMachine (prompt) {
//     return
// }


// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin


