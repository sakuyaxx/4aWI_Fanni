let number = 24;

if(number < 30){
    console.log("Die Zahl", number, "ist kleiner als 30.")
}

if(number != 25) {
    console.log("Die Zahl", number, "ist nicht 25!")
}
else{
    console.log("Die eingegebene Zahl ist 25.")
}

// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"

let num = 33;

if(num < 20){
    console.log("mini");
}
else if(num > 50){
    console.log("large");
}
else{
    console.log("medium")
}

// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"

num = 27;

if(num <= 7){
    console.log("mini");
}
else if(num > 90){
    console.log("large");
}
else{
    console.log("medium")
}