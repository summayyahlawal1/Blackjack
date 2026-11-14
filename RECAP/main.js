//    - RECAP
//    - Arrays
//    - Objects
//    - Booleans
//    - If else statements
//    - Comparism operators
//    - Logical operators
//    - for loops
//    - The Math object
//    - The return statement
//    - DOM manipulation 

/* 
Quiz 1: Objects and functions

1. Create a person object that contains three keys; name. age and country
2. Use yourself as an example to set the values for name, age and the country.

3. Create a function, logData(), that uses the person object to create a string in the 
   following format: "Coach Imran is 35 years old and lives in Nigeria"

 4. Call the logData() to verify that it works
*/
// Quiz 1


    let person = {
        name: "Summayyah",
        age: 10,
        country: "Canada"
    }

function logData(){
    console.log(
       "Queen " + person.name + " is " + person.age + " years old and she live in " + person.country
    );
    
}
logData()

// Quiz 2



/* 
Quiz 2: If else

 1. Create a conditional statement (if/else/else if) that logs out the discount the 
    passenger will get based upon the value of the age variable

 - less than 6 years old   ->  free
 - 6 to 17 years old       -> child discount
 - 18 to 26 years old      -> student discount
 - 27 to 66 years old      -> full price
 - over 66 years old       -> senior citizen discount
*/

let age = 0

if (age < 6) {
    console.log("free");
} else if (age < 18) {
    console.log("child discount");
} else if (age < 27) {
    console.log("student discount");
} else if (age < 67) {
    console.log("full price");
} else {
    console.log("senior citizen discount");
}   

// Quiz 3

/* 
Quiz 3: Loops and arrays

1. Use a for loop to log the following to the console:

The 5 largest countries of the world
- China
- India
- United State
- Indonisia
- Pakistan
*/

console.log("The 5 largest countries of the world");

const largestCountries = ["China", "India", "United States", "Indonesia", "Pakistan"];    

for( let i = 0; i < largestCountries.length; i++ ){
    console.log( " - " ,largestCountries[i]);
}



// Quiz 4

/* 
Quiz 4: push, pop, unshift, shift challenge

1. You need to help fixup the worldLargeCountries array so that China and Pakistan
   are added back into their respective places

2. Use push() & pop() and their counterparts unshift() & shift()
3. Google how to use unshift() & shift()   
*/
let worldLargeCountries = ["Tuvalu", "India", "United State", "Indonisia", "Monaco"]
worldLargeCountries.pop();
console.log(worldLargeCountries);

worldLargeCountries.push("Pakistan");
console.log(worldLargeCountries);

worldLargeCountries.shift();
console.log(worldLargeCountries);

worldLargeCountries.unshift("China");
console.log(worldLargeCountries);

// Quiz 5
/* 
Quiz 5: Logical operator

1. If it is Friday the 13th, log out "TGIF". use the logical "AND operator"  -> &&
*/

let dayOfMonth = 13
let weekday = "Friday"

// Both conditions must be evaluated to true before the code can be executed with && operator

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("TGIF");
    
}

// Quiz 6

/* 
 Quiz 6 : Rock papers scissors

1. Create a function that returns a random item from the array
*/
  let items = [
    "Rock",
    "Paper",
    "Scissors"
    ]

function getRandomItem() {

    let random = Math.floor(Math.random() * items.length)
    return items [random]
}

 console.log(getRandomItem() )

