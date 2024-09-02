let str = "I am a web developer."

let reverse = ""; //empty string er stha new value char ta add hbe 

for(let char of str){
    // console.log(char);  this is will be print "I am a web developer." char by char
    reverse = char +  reverse // I // a // m tar mane 1st letter ta sob somoy last er dike thakbe
    
}
console.log(reverse);