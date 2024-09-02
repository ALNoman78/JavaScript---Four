// toUppercase() $ toLowercase()

let book1 = "Art of thinking clearly"
let book2 = "art of Thinking clearly"

if(book1.toLowerCase === book2.toLowerCase){   // touppercase and tolowercase are using for text transform
    console.log("this are same")
}else{
    console.log(" this isn't same");
}


// trim method

let sub = "   chemistry";
let sub2 = "  chemistry    "  // trim are use for remove white space

if (sub.trim() === sub2.trim()) {
    console.log("this comparison is true");
}else{
    console.log("This comp isn't true");
}