 let countEL = document.getElementById('counter')
let count = 0 


function lapIncrement() {
    save += 1
    countEL.innerHTML = save
}

/* 
Task:
1. Create two variables name and greeting, The name variable should store your name, and the greeting should store e.g "Hi, my name is "
2. Create a third variable, myGreeting, that concatenates the two strings.
3. Log myGreeting to the console.
*/
let name = "summayyah"
let greet = "Hi, my name is "
let myGreeting = greet + name
console.log(myGreeting);


/* 
Challenge:
console.log(4 + 5)
console.log("2" + "4")
console.log("5" + 1)
console.log(100 + "100")
*/

console.log(4 + 5) // 9
console.log("2" + "4") // 24
console.log("5" + 1) // 51
console.log(100 + "100") // 100100
console.log(1 + 2 + "3") // 33


// Challenge:
// 1. Grab a welcome-el paragraph and and store it in a variable called welcomeEl
// 2. Create two variables (myName & greetings) that contains your name and the greeting we want to render on the page
// 3. Render the welcome message using welcomeEl.innerText

/* 
1. Add an emoji to the end! 👋
NOTE: WRITE YOUR CODE BELOW HERE
HINT: count = count + 1
*/

let welcomeEl = document.getElementById('welcome-el');
let myName = "summayyah";
let greetings = "Welcome back, ";
welcomeEl.innerText = greetings + myName + ' 👋';

let wish = "I want to see the show \"The Lion King\"";
console.log(wish)
