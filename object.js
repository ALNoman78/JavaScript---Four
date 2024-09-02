// object is non-primitive data type

let obj = {
    name : "noman",
    roll : 580165,
    isPassed : true,
    salary : 30000,
    exam : {
        newName : "Al Noman",
    }
}
obj.salary = 43000;
console.log(obj);

console.log(obj.exam.newName);
let name = obj.name // this called be dot notation 
console.log(name);

// primitive data type ke ar choto kora jbe nah 
