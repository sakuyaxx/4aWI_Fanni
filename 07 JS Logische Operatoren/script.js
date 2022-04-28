// Erstelle zwei Zufallszahlen zwischen 0 und 100

let random = Math.random() * 100;
let randomInt = Math.round(random);

console.log(randomInt);

let random2 = Math.random() * 100;
let randomInt2 = Math.round(random2);

console.log(randomInt2);


// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

if(randomInt < randomInt2 && randomInt < 50){
    console.log(randomInt, "ist kleiner als", randomInt2, "und mini");
}


// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

if(randomInt < 30 || randomInt2 < 30){
    console.log("Mindestens eine der beiden ist kleiner als 30");
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

if(randomInt < 50 && randomInt2 != 50){
    console.log("Erste Zahl klein, zweite Zahl != 50");
}


//1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt,
//aber nicht mehr in der Probezeit ist. 

let age = 25;
let license = true;
let probezeit = false;

if(age >= 24 || (license == true && probezeit == false)){
    console.log("Diese Person darf Motorrad fahren.");
}
else {
    console.log("Diese Person darf kein Motorrad fahren.");
}


//2. Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen Elternteil mit dabei hat.

age = 7;
let elternteil = true;

if(age >= 14 || elternteil == true){
    console.log("Das Kind darf den Kinofilm ansehen.");
}
else{
    console.log("Das Kind darf den Kinofilm nicht ansehen.");
}


//3. Wenn ich den Kurs “Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben
//oder bereits 2 Jahre Berufserfahrung vorweisen. 

let berufserfahrung = 5;
let codingCampus = false;

if(berufserfahrung >= 2 || codingCampus == true){
    console.log("Ich darf den Kurs “Softwarearchitekturen” besuchen.");
}
else{
    console.log("Ich darf den Kurs “Softwarearchitekturen” nicht besuchen.");
}


//4. Der Bewerber hat eine Chance auf eine Anstellung, wenn er bereits über 5 Jahre Erfahrung vorweist
//oder einen Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.

berufserfahrung = 4;
let master = false;
let einwandfrei = false;

if(berufserfahrung >= 5 || (master == true && einwandfrei == true)){
    console.log("Der Bewerber hat eine Chance auf eine Anstellung.");
}
else{
    console.log("Der Bewerber hat keine Chance auf eine Anstellung.");
}