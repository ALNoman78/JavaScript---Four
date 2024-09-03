// task one
// question - 1 : Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

let output = ["golden rod"]
console.log(colors["golden rod"]);
console.log(colors[output]);

// task two 
// question - 2 : For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car['passenger capacity'] = 5; 
// console.log(car);

// task - 3
// question - 3 : Display the physics marks as output.

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30,
//     }
// };

// console.log(student.physics);


// task - 4 
//  question - 4 : Count the number of properties.

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let keys = Object.keys(student)
// console.log(keys.length);

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,
}

for(let key in myObject){
    // console.log(key); 
    // console.log(typeof myObject[key]);  67 & 68 number line shorthand
    console.log(`key : ${key} | type : ${typeof myObject[key]} `);
}
