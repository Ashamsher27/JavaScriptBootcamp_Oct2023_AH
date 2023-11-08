//Given an array of numbers, find the average of all the positive numbers. Ignore the negative numbers.
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//iterate through all the positive numbers --> % 2 = 0, 2, 4, 6, 8, 10
//find the sum of all the positive numbers --> 30 
//divide by the total of how many positive numbers were in the array --> 5 


const numbers = [0, 1, -2, 3, 4, -5, 6, -7, -8, 9, 10];

function averageOfPositiveNumbers (numbers) {
    let count = 0;
    let sumOfPositive = 0; 
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sumOfPositive += numbers[i];
        }
    }

    for (let i = 0; i <numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }

    console.log(sumOfPositive/count);
}

averageOfPositiveNumbers(numbers);

