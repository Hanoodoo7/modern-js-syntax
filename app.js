// Use `.map()` to iterate over the following array:

const nums = [66, 69, 67, 80085, 52, 8, 0, 76];

// Create a new array where each value is multiplied by 2 and log the new array.
const numsby = nums.map((num) =>{
    return num * 2;
})

// Your code here

console.log(numsby)


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['sardines', 'sausage', 'peparoni'];

// Your code here

const [first , second] = pizzaToppings

console.log(first)
console.log(second)


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'BMW',
  model: 'X6 M comp',
};

// Your code here
const {make , model} = car;

console.log(car.make)
console.log(car.model)


// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.
// Your code here
const controversialPizzaToppings = [...pizzaToppings]
console.log(controversialPizzaToppings)


// Change the `model` property of `myCar` to 'q7'. Log both objects.
const myCar = {...car}
// Your code here

myCar.model = "q7 aka crap"
console.log(myCar)


// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile ={}

let propertyName = "username"

userProfile[propertyName] = "Mohanad"
console.log(userProfile)


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function ani (noun , adjective){
     console.log(`The ${noun} is ${adjective}`);
}

ani("cat","white")


// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// Your code here

let test = pizza === "tasty" ?"yum" : "yuck"
console.log(test)




// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || "en"

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || "light"
// Log the result
console.log('User theme setting:', USER_THEME);

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
  name: 'Alice',
};

let cat = adventurer.cat?.age // Your code here

console.log(cat);