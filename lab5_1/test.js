//โปรกรมA1
var x1 = 10;
if (x1 === 10) {
    var y1 = 100;
    console.log(y1); // Output: 100
}
console.log(y1); // Output: 100

//โปรกรมA2
var x2 = 10;
if (x2 === 10) {
    let y2 = 100;
    console.log(y2); // Output: 100
}
try {
    console.log(y2); // Output: ReferenceError: y2 is not defined
} catch (error) {
    console.log(error.message); // Handle the error
}

//โปรกรมA3
var x3 = 10;
let y3 = 100;
if (x3 === 10) {
    console.log(y3); // Output: 100
}
console.log(y3); // Output: 100

//โปรกรมB1
let myArray1 = [1, 2, 3];
myArray1.forEach(element => {
    console.log(element); // Output: 1, 2, 3 (each element is logged)
});

//โปรกรมB2
let myArray2 = [1, 2, 3];
for (const iterator of myArray2) {
    console.log(iterator); // Output: 1, 2, 3 (each element is logged)
}

//โปรกรมB3
let dog = {
    name: "Yoyo",
    color: "black",
    age: 2
};
for (const k in dog) {
    console.log(k); // Output: name, color, age (each property name is logged)
}

//โปรกรมC1
const numbersOne1 = [1, 2, 3];
const numbersTwo1 = [4, 5, numbersOne1];
console.log(numbersTwo1); // Output: [4, 5, [1, 2, 3]] (nested array)

//โปรกรมC2
const numbersOne2 = [1, 2, 3];
const numbersTwo2 = [4, 5, ...numbersOne2];
console.log(numbersTwo2); // Output: [4, 5, 1, 2, 3] (spread operator)

//ต้องเรียกใช้ function อย่ํางไรถึงได้ผลลัพธ์เป็น 1+2+3+4
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}

console.log(fun(1, 2, 3, 4));
