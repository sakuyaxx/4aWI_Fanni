 // Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apfel"

let banana = "Banane";
let apple = "Apfel";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let bananaAvgWeight = 0.22
let appleAvgWeight = 0.34;


// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel

let bananaPerKilo = 1/bananaAvgWeight;
let applePerKilo = 1/appleAvgWeight;

console.log("1kg Bananen sind", bananaPerKilo, "Stück");
console.log("1kg Äpfel sind", applePerKilo, "Stück");

let bananaPrice = bananaPricePerKilo / bananaPerKilo;
let applePrice = applePricePerKilo / applePerKilo;

console.log("Der Preis einer Banane beträgt", bananaPrice + "€.");
console.log("Der Preis eines Apfels beträgt", applePrice + "€.");


// Preis von 8 Äpfeln

let result = applePrice *8;

console.log("Der Preis von 8 Äpfeln beträgt", result + "€.");

// Preis von 17 Bananen

result = bananaPrice * 17;

console.log("Der Preis von 17 Bananen beträgt", result + "€.");


// Preis von 1 Tonne Äpfel

result = applePricePerKilo * 1000;

console.log("Der Preis von 1t Äpfeln beträgt", result + "€.");


// Preis von 1 Tonne Bananen

result = bananaPricePerKilo * 1000;

console.log("Der Preis von 1t Bananen beträgt", result + "€.");