let collage = {
    collageName: "Hpi",
    roll : [580155,580165,580135,580153,580123],
    exma : ["Bangla", "English", "Math", "Physics"],
    newSchool : {
        className : "Section A",
        result : {
            merit : ["nice","top","best"],
            newMobile : {
                brandName : "Samsung",
                price : 40000,
                model : "Galaxy A54 5G"
            }
        }
    } 
}
console.log(collage)
let newRoll = collage.roll;
console.log(newRoll);
collage.newSchool.result.newMobile.brandName = "Apple"; // update brand name 
console.log(collage.newSchool.result.newMobile.brandName)
console.log(collage.newSchool.result.merit[2])