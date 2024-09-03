let mobile = {
    brand : "samsung",
    price : 45000,
    camera : 6,
    ram : 8,
    storage : {
        processor : "snapdragon 830 ",
        newArr : [12,34,54,56,76],
        isPassed : true,
        performance : {
            newDevice : "galaxy A55 5G"
        }
    }
}

// console.log(mobile)
// console.log(mobile.brand) // print single value
// console.log(mobile.storage) // print nested object
// console.log(mobile.storage.processor) // print nested object value
// console.log(mobile.storage.performance) // print nested object obj.
// console.log(mobile.storage.performance.newDevice) // print nested object obj. new value


// if i want to print my object all value

let allValue = Object.values(mobile)
// console.log(allValue)

// if i want to print object all keys name 

let keys = Object.keys(mobile)
// console.log(keys)

// and if i want to print keys : value then i have to  use concat () method

let conc = keys.concat(allValue)
console.log(conc);