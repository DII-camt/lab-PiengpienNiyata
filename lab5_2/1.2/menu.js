const json_menu = [
    {
        "name": "1. Home",
        "menu": [
            {
                "name": "1.1. history",
                "menu": [
                    {
                        "name": "1.2. history"
                    }
                ]
            }
        ]
    },
    {
        "name": "2. Our product",
        "menu": [
            {
                "name": "2.1. sport car",
                "menu": [
                    {
                        "name": "2.1.1. Lamborghini"
                    },
                    {
                        "name": "2.1.2. mustang"
                    }
                ]
            }
        ]
    },
    {
        "name": "3. contact us"
    }
];


const output1 = json_menu[0].menu[0].name; 
const output2 = json_menu[1].menu[0].menu[1].name; 

console.log(output1);
console.log(output2);

const letters = ["A", "B", "C", "D"];
const combinedString = letters.join('');
console.log(letters.join(' and ')); 

const letter1 = ["A", "B", "C", "D"];
const letter2 = ["A", "B", "C", "D"];
const combinedArray = letter1.concat(letter2);
console.log(combinedArray); 

const letter3 = ["A", "B", "C", "D"];
letter3.push("G");
console.log(letter3);