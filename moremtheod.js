// slice method in string (Example)

let userName = "AbdullahAlNoman"
let x = userName.slice(2,7) // start with 2 index end 6 index
console.log(x);

// split("") method in string

// let accName = "Sonali Bank limited"
// let singleChar = accName.split("")
// console.log(singleChar)

// split method


let accName = "Sonali ,Bank ,limited"
let singleChar = accName.split(",") // this will be defined single array convert a string
console.log(singleChar)

// join(-) diye string ke gulake alada alaada vbe join korano hay 


// concat( ) method

let firstName = "Abir"
let lastName = "Islam"

let added  = firstName.concat(" ").concat(lastName) //ake jaygay bar bar concat() method use kora jay //
console.log(added);


//  includes ()

let accountName = "Abdullah Al Noman";
let businessAc = accName.includes("n") //jodi includes er moddhe character thake thle true ashbe ar na thakle false ashbe 
console.log(businessAc)