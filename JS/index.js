function getMilk(money, costPerBottle) {
    console.log("bye " + calcBottles(money, costPerBottle) + " bottles of milk");
    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
    return Math.floor(startingMoney / costPerBottle);
}

function calcChange(startingMoney, costPerBottle) {
    return(startingMoney % costPerBottle);
}

let change = getMilk(prompt("Please, input something"), 1.5);
console.log("change = " + change);

/* --- BMI Calculating --- */

function bmiCalculator (weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        return "Your BMI is " + bmi + ", so you have a normal weight";
    }
    if (bmi > 24.9) {
        return "Your BMI is " + bmi + ", so you are overweight";
    }
}
bmiCalculator(60, 2);

/* --- Leap Year --- */

function isLeap(year) {
    if (((year % 4) === 0) || (((year % 4) === 0) && ((year % 100) !== 0))
        || (((year % 4) === 0) && ((year % 100) === 0)) && ((year % 400) === 0)) {
        return "Leap year."
    } else {
        return "Not leap year."
    }
}
isLeap(prompt("Please input year : "));

/* --- Arrays --- */

let guestList = ["Igor", "Jack", "James", "Jason"]
console.log(guestList[0]);

let guestName = prompt("Please input guest name");

if (guestList.includes(guestName)) {
    alert("Welcome!")
} else {
    alert("No such name in the list.")
}

/* --- Arrays (FizzBuzz) --- */

let output = [];

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let outputItem = i;
        if (i % 3 === 0) {
            outputItem = "Fizz";
        }
        if (i % 5 === 0) {
            outputItem = "Buzz";
        }
        if ((i % 3 === 0) && (i % 5 === 0)) {
            outputItem = "FizzBuzz";
        }
        output.push(outputItem);
    }
}
fizzBuzz();
console.log(output);

/* --- Arrays (with Random) --- */

let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
    return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!";
}

/* --- Fibonacci Generator --- */

function fibonacciGenerator(n) {

    let fibonacciNumbersArray = [];

    if (n === 1) {
        fibonacciNumbersArray = [0];
    } else if (n === 2) {
        fibonacciNumbersArray = [0, 1];
    } else {
        fibonacciNumbersArray.push(0, 1);
        for (let i = 2; i < n; i++) {
            fibonacciNumbersArray.push(fibonacciNumbersArray[i-2] + fibonacciNumbersArray[i-1]);
        }
    }
    return fibonacciNumbersArray;
}
console.log(fibonacciGenerator(15));