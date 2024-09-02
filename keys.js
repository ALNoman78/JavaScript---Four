let computer = {
    brand : "Consiar",
    price : 40000,
    processor : "intel",
    hdd : "128gb",
    ssd : "32gb",
    core : "core i5 10th gen",
    monitor : "hp brand"
}
let countKeys = Object.keys(computer) // this syntax give all keys name
console.log(countKeys);


// ar jodi kono object er sudu value ghula janar drkr hy tkhn

let newValue = Object.values(computer)
console.log(newValue)