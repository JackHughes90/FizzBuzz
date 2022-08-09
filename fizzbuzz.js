function fizzBuzz() {
    
    // creating a for loop that runs through every number 1 - 100
    for (i = 1; i <= 100; i++) {
        // if the number is a multiple of 3 AND a multiple of 5: Print "fizzbuzz"
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz");
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
    };
};
// Run program
fizzBuzz();