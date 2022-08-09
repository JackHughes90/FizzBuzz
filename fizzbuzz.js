const readline = require('readline-sync');

function fizzBuzz() {
    console.log("how many numbers would you like to count to?");
    let response = readline.prompt();
    var num = parseInt(response);
    // creating a for loop that runs through every number 1 - 100
    for (i = 1; i <= num; i++) {
        var arr = [];
        
        // if the number is a multiple of 3: Add "fizz" to string
        if (i % 3 == 0) {
            arr.push('fizz');
        }

        if (i % 13 == 0) {
            arr.push('fezz');
        }

        // if the number is a multiple of 5: Add "buzz" to string
        if (i % 5 == 0) {
            arr.push('buzz');
        }

        if (i % 7 == 0) {
            arr.push('bang');
        }

        if (i % 11 == 0) {
            arr = ['bong'];
            if (i % 13 == 0) {
                arr.unshift('fezz');
            }
        }

        if (i % 17 == 0) {
            arr.reverse();
        }

        // if array is empty: Print number
        if (arr.length === 0) {
            console.log(i);
        }
        // if array has contents: Print string of array
        else {
            console.log(arr.join(''));
        }
    };
};

// Run program
fizzBuzz();

/*
// if the number is a multiple of 3 AND a multiple of 5: Print "fizzbuzz"
if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz"+sevens());
    //console.log(sevens());
}
// if the number is a multiple of 3: Print "fizz"
else if (i % 3 == 0) {
    console.log("fizz");
}
// if the number is a multiple of 5: Print "buzz"
else if (i % 5 == 0) {
    console.log("buzz");
}

// for all other numbers just print the number
else {
    console.log(i);
}
*/


/*
// if the number is a multiple of 3: Add "fizz" to string
if (i % 3 == 0) {
    string += 'fizz';
}

if (i % 13 == 0) {
    string += 'fezz';
}

// if the number is a multiple of 5: Add "buzz" to string
if (i % 5 == 0) {
    string += 'buzz';
}

if (i % 7 == 0) {
    string += 'bang';
}

if (i % 11 == 0) {
    string = 'bong';
    if (i % 13 == 0) {
        string = string.replace (/^/, 'fezz');
    }
}

// if string is empty: Print number
if (string.length === 0) {
    console.log(i);
}
// if string has contents: Print string
else {
    console.log(string);
}

*/