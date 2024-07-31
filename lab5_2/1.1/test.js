//โปรแกรม A1
const vehicles = ['mustang', 'f-150', 'expedition'];
const [a , ,b] = vehicles; //  ? ผลลัพ์ที่ได้คือ

//โปรแกรม A2
const vehicleOne1 = {
 brand: 'Ford',
 model: 'Mustang',
 type: 'car',
 year: 2021,
 color: 'red'
}
console.log(vehicleOne1.color); //  ไม่ออก
console.log(vehicleOne1["color"]);// red
console.log(vehicleOne1["color "]);// red

//โปรแกรม A3
const vehicleOne2 = {
 brand: 'Ford',
 model: 'Mustang',
 type: 'car',
 year: 2021,
 color: 'red'
}
const { type, color, brand, model } = vehicleOne2; // undefined

//โปรแกรม A4
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());// Mango
