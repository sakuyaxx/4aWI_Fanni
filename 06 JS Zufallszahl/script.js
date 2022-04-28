let random = Math.random() * 1000;
let randomInt = Math.round(random);

console.log(randomInt);

if(randomInt > 800){
    console.log("bigger than 800");
}
else if (randomInt < 200){
    console.log("smaller than 200");
}
else if (randomInt < 500 && randomInt > 200){
    console.log("200 <", randomInt, "< 500");
}
else if (randomInt < 800 && randomInt > 500){
    console.log("500 <", randomInt, "< 800");
}