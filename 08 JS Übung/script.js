// Erstelle eine Zufallszahl zwischen 5 und 10

let random = Math.random() * (10 - 5 + 1) + 5;
let randomInt = Math.round(random);

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.

switch (randomInt) {
  case 0:
    randomInt = 0;
    console.log("zero");
    break;
  case 1:
    randomInt = 1;
    console.log("one");
    break;
  case 2:
    randomInt = 2;
    console.log("two");
    break;
  case 3:
    randomInt = 3;
    console.log("three");
    break;
  case 4:
    randomInt = 4;
    console.log("four");
    break;
  case 5:
    randomInt = 5;
    console.log("five");
    break;
  case 6:
    randomInt = 6;
    console.log("six");
    break;
  case 7:
    randomInt = 7;
    console.log("seven");
    break;
  case 8:
    randomInt = 8;
    console.log("eight");
    break;
  case 9:
    randomInt = 9;
    console.log("nine");
    break;
  case 10:
    randomInt = 10;
    console.log("ten");
}
