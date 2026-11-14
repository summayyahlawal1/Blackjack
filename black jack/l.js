// /*
// Introduction:

// 1. Create two variables: firstTest and secondTest.
// 2. Assign any test scores of your choice (between 0 and 10) to the variables.
// 3. Create a variable called sum and set it to the total of the two test scores.
// 4. Display the total score in the console.
// */

// /*
// Challenge:

// Use an if...else statement to check whether the student passed the test.

// - The pass mark is 10.
// - If the total score is 10 or more, print "You passed!"
// - Otherwise, print "You failed."
// */

// /* 
// Lesson 4: 
// 1. Add hasBlackjack variable and set it to false
// 2. Reassign it to true after you have logged out the message when of sum === 21
// 3. log it out after all
//  */
// // make the sentence display in the browser

//  let countEL = document.getElementById('couter')
//  let saveEL = document.getElementById('save')


// // let randomNumber = Math.floor(Math.random() * 12)  

// let firstTest = 0
// let secondTest = 0



// // console.log(sum)


 
// //   let isAlive = true
// //   let hasBlackjack = false
//  let welcomeEL = document.getElementById('welcome')
// // function newCard() {

// // // willEL.textContent = 'do you want to redeem your card?😂'
// // // willEL.textContent = 'Woo! You got a blackjack!🤣😍'
// // // willEL.textContent = 'You lose the game.😥'
// // if (sum < 20) {
// // welcomeEL.textContent = "Do you want to redeem your card?"
// // }else if (sum === 20) {
// //    welcomeEL.textContent = "Woo! You got a blackjack!"
// //     // hasBlackjack = true
// // }else {
// //     welcomeEL.textContent = "You lose the game."
// //     // isAlive = false
// // }
// // }
// // newCard()
     
// function newCard() {
    

//         welcomeEL.textContent = "Do you want to redeem your card?"
       
//         welcomeEL.textContent = "Woo! You got a blackjack!"
//         // hasBlackjack = true
   
//         welcomeEL.textContent = "You lose the game."
//         // isAlive = false

// }


// // if (sum < 20) {
// // console.log('Do you want to redeem your card?')
// // }else if (sum === 20) {
// //    console.log('Woo! You got a blackjack!')
// //     hasBlackjack = true
// // }else {
// //     countEL.textContent = 'You lose the game.'
// //     isAlive = false
// // }

// // console.log(firstTest)
// // console.log(secondTest)

 
// // console.log(randomNumber)


// // console.log(hasBlackjack)
// //  console.log(isAlive)




// // let name = 'sumayah'// String data type
// // let herAge = 5       // Number data type
// // let herPhone = false  // Boolean data type

// // console.log(typeof (herPhone))

// // function getItem() {
// //     if ( herPhone ===true) {
// //         console.log('Get her the item')
// //     }
// //     else {
// //         console.log('Do not get her the item')
// //     }
// // }

// // getItem()















// Elements
let countEL = document.getElementById("counter")
let saveEL = document.getElementById("save")
let welcomeEL = document.getElementById("welcome")

// Variables
let firstCard = 0
let secondCard = 0
let sum = 0

// Start Game
function startGame() {

    firstCard = Math.floor(Math.random() * 12) 
    secondCard = Math.floor(Math.random() * 12) 

    sum = firstCard + secondCard

    saveEL.textContent = "Cards: " + firstCard + " " + secondCard
    countEL.textContent = "Sum: " + sum

    if (sum < 20) {
        welcomeEL.textContent = "Do you want a new card?"
    } else if (sum === 20) {
        welcomeEL.textContent = "You've got Blackjack! 🎉"
    } else {
        welcomeEL.textContent = "You're out of the game!"
    }
}

console.log(4 === 3)   //false
console.log(5 > 2)     //true
console.log(12 > 12)  //flase
console.log(3 < 0)    //false
console.log(3 >= 3)    //true
console.log(11 <= 11)  //true
console.log(3 <= 2)    //false