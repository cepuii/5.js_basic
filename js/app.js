let firstName = "Serhii";
let lastName = "Chernousov";

let fullName = `${firstName} ${lastName}`;
console.log(`1. ${fullName}`);

let aSide = 5;
let bSide = 12;
let square = aSide * bSide;
console.log(`2. Square: ${square} = ${aSide} * ${bSide}`);

let pow = Math.pow(10, 6);
console.log(`3. Pow: ${pow}`);

let randomNumber = Math.floor(Math.random() * 50);
console.log(`4. Random 0..50: ${randomNumber}`);

let number = -1;

console.log(`5. Value : ${number}`)
if (number < 0){
    console.log("negative value");
} else {
    console.log("positive value");
}

let text = '12';
console.log(`6. Text: ${text}`);
if (text.length > 1){
    console.log(" The char before last: " + text[text.length - 2]);
}

let month = Math.floor(Math.random() * 12);
console.log(`7. The mounth number: ${month}`);
switch (month){
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Month with this number doesn`t exist!");
}

let password = "&&&&";
console.log(`8. Password: ${password}`);
if (password.length > 5 && password.indexOf("&") != -1){
    console.log("this password is strong"); 
} else {
    console.log("this password is weak"); 
}

let a = 5;
let b = "a";

console.log(`9. Variables: ${a}, ${b}`);
if ( typeof a == "number" &&  typeof b == "number"){
    let sum = a + b;
    console.log("Sum of numbers: " + sum);
} else {
    console.log("Sum of those items can\’t be counted");
}


let textOne = "abc";
let textTwo = 10;

console.log(`10. Comparing texts: ${textOne}, ${textTwo}`)
if (typeof textOne == "string" && typeof textTwo == "string" && textOne.length==textTwo.length){
    console.log("those items are strings and they\’re equal");
} else {
    console.log("items are not compareble");
}
