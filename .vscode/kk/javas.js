// Challenge:
// 1. Grab a welcome-el paragraph and and store it in a variable called welcomeEl
// 2. Create two variables (myName & greetings) that contains your name and the greeting we want to render on the page
// 3. Render the welcome message using welcomeEl.innerText

/* 
1. Add an emoji to the end! 👋
NOTE: WRITE YOUR CODE BELOW HERE
HINT: count = count + 1
*/
// let welcomeEl = document.getElementById("welcome-el")
//  let myName = "Summayyah";
//  let greetings = "Welcome back, ";
//  helloEl.innerText = greetings + myName + "👋";
 /* 
Challenge:
1. Grab a welcome-el element and store it in a variable called welcomeEl
2. Create two variables (userName & notification) that contains your name and the message we want to render on the page i.e "You got a new notification"
3. listen for clicks on the button when it clicked
43. Render the welcome message using welcomeEl.innerText
NOTE: WRITE YOUR CODE BELOW HERE
*/
let welcomeEl = document.getElementById("welcome-el")
// console.log(welcomeEl)

let user = "Summayyah"
let notification = "You have ten new notifications"

function notify() {
let message = user + ", " + notification
// console.log(message)
welcomeEl.innerText = message
}
