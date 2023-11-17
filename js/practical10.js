const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number: '));

console.log('Multiplication Table (For Loop):');
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log('\nMultiplication Table (While Loop):');
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}

console.log('\nMultiplication Table (Do-While Loop):');
i = 1;
do {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
} while (i <= 10);



// Start:
// Input:
    // Use the prompt module to get user input for a number.
    // Parse the input to an integer and store it in the variable number.
// For Loop Multiplication Table:
    // Display "Multiplication Table (For Loop):"
    // Use a for loop with the loop variable i starting from 1 to 10:
    // Display the multiplication table for the entered number and the current value of i.
// While Loop Multiplication Table:
    // Display "Multiplication Table (While Loop):"
    // Initialize the loop variable i to 1.
    // Use a while loop to iterate while i is less than or equal to 10:
    // Display the multiplication table for the entered number and the current value of i.
    // Increment i by 1.
// Do-While Loop Multiplication Table:
    // Display "Multiplication Table (Do-While Loop):"
    // Initialize the loop variable i to 1.
    // Use a do-while loop to execute the following block:
    // Display the multiplication table for the entered number and the current value of i.
    // Increment i by 1.
    // Continue the loop while i is less than or equal to 10.
// End: