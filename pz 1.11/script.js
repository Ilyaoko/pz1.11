/*function second(total) {

    return total % 60
}
document.write(second(700))*/
/*function perimeter(count, side) {
    return count * side
}
document.write(perimeter(10, 40))*/
/*function param(n) {
    for (i = 1; i + n; i++) {
        if (n % 3 == 0 && n % 5 == 0) {
            print('fizzbuzz')
        }
        if (n % 3 == 0) {
            print('fizz')
        }
        if (n % 5 == 0) {
            print('buzz')
        }
    }
}
document.write(param(40))*/
/*function calculate(a, b, c) {
    return (a + b + c) / 3
}
document.write(calculate(1, 2, 3))*/
/*function isDivisible(n,x,y){
    if(n/x&&n/y){

    }
}*/
/*const n = 10;
const array = [];
for (i = 1; i < n; i++) {
    array.push(Math.floor(Math.random() * 100));
}
const min = Math.min(...array)
const max = Math.max(...array)
const sum = array.reduce((accumulator, currentvalue) => { return accumulator + currentvalue; })
const average = sum / n;
const neparni=array.filter((val)=>val%2!==0)
console.log("Min", min)
console.log("Max", max)
console.log("Sum", sum)
console.log("average", average)
console.log("neparni",neparni)*/
/*let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i][j] = Math.floor(Math.random() * 21) - 10;
    }
}
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (arr[i][j] < 0) {
            arr[i][j] = 0;
        } else if (arr[i][j] > 0) {
            arr[i][j] = 1;
        }
    }



}
console.log(arr);*/
/*function Add(a, b) {
    console.log(a + b);
}

function Sub(a, b) {
    console.log(a - b);
}

function Mul(a, b) {
    console.log(a * b);
}

function Div(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero!");
    } else {
        console.log(a / b);
    }
}

let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));
let op = prompt("Enter the operation to perform (+, -, *, /):");

switch (op) {
    case "+":
        Add(a, b);
        break;
    case "-":
        Sub(a, b);
        break;
    case "*":
        Mul(a, b);
        break;
    case "/":
        Div(a, b);
        break;
    default:
        console.log("Invalid operation!");
}*/
/*function analyzeNumber(num) {
    if (num > 0) {
        console.log(num + " є позитивним числом");
    } else if (num < 0) {
        console.log(num + " є негативним числом");
    } else {
        console.log(num + " дорівнює нулю");
    }
    let isPrime = true;
    if (num === 1) {
        isPrime = false;
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num + " є простим числом");
    } else {
        console.log(num + " не є простим числом");
    }
    if (num % 2 === 0) {
        console.log(num + " ділиться на 2 без залишку");
    }
    if (num % 5 === 0) {
        console.log(num + " ділиться на 5 без залишку");
    }
    if (num % 3 === 0) {
        console.log(num + " ділиться на 3 без залишку");
    }
    if (num % 6 === 0) {
        console.log(num + " ділиться на 6 без залишку");
    }
    if (num % 9 === 0) {
        console.log(num + " ділиться на 9 без залишку");
    }
}
analyzeNumber(50);
analyzeNumber(6);
analyzeNumber(-4);
analyzeNumber(2)*/
/*function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {

        if (typeof arr[i] === "number") {
            newArr.

            push(arr[i] ** 2);
        } else {
            newArr.

            push(arr[i]);
        }

    }
    return newArr;
}
const myArray = [1, 2, "three", 4, "five", 6];
const rev = reverse(myArray)
console.log(rev)*/
function removeDuplicates(arr) {
    let newArr = [];


    for (let i = 0; i < arr.length; i++) {


        if (newArr.indexOf(arr[i]) === -1) {
            newArr.

            push(arr[i]);
        }
    }
    return newArr;



}
const myArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray);