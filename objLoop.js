let obj = {
    brand : "samsung",
    price : 50000,
    ram : 8,
    camera : "12mp",
    isPassed : true
}

for(let value in obj){
    // console.log(value);
    // console.log(obj[value])
}

// general niyom a value ber korar niyom

// let keys = Object.values(obj)
// console.log(keys)
// for (let i = 0; i <= keys.length; i++) {
//     console.log(keys[i]);
    
// }

let keys = Object.keys(obj)
console.log(keys);

for(let newValue of keys){
    console.log(newValue ,":" , obj[newValue])
}