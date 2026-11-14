
// document.getElementById('counter').innerHTML = 145;


/* 
Challenge:
1. Create a variable, bonusPoint. Initialize it as 50. Increase it by 50.
2. Decrese it down to 25, and then finally increase it to 70.
3. Console.log the value after each step.
*/
 
let bonusPoint = 50;
console.log(bonusPoint);

bonusPoint = bonusPoint + 50;

console.log(bonusPoint);

bonusPoint = bonusPoint - 25;
console.log(bonusPoint);

bonusPoint = bonusPoint + 70;
console.log(bonusPoint);


function race() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}
 race()


/* 
Task1: 
1. Create a function (You decide the name) that logs 
out the number 45 to the console.
2. Call/invoke the function.
*/

/* 
Task2:
1. Create a function that logs out the sum of all the laps item
*/

   
function LapNum() {
    console.log(45);
}

LapNum()

let lap1 = 34;
let lap2 = 34;
let lap3 = 33;
    

function LapSum() {
    console.log(lap1 + lap2 + lap3);
}

LapSum()


// lapIncrement()
// Task2: 1. initialize the count as 100 2. 
// listen for clicks on the decrement button 3. decrement the 
// count variable when the button is clicked by 2

// let count = 100

// function lapIncrement() {
//     count += 5
//     console.log(count);
// }


let save = 0
function decrement() {
    save -= 1
     countEL.textContent = save   
}

 let countEL = document.getElementById('counter')



function lapIncrement() {
    save += 1
    countEL.textContent = save
}
// let down = 202

// function decrement() {
//     down -= 2
//     countEL.innerHTML = down
// }



function small() {
// console.log( save)
let saveString = save + " - "
saveEl.textContent += saveString
countEL.textContent = 0
save = 0
}

function reset() {
    save = 0
    countEL.textContent = save
}

/* 
Lesson 12: Create a paragraph with an id of save-el
1. Grab the save-el paragraph and store it in a variable called saveEl
2. Create a variable that contains both the count and the dash separator i.e "12-15-"  
3. Render the variable in the saveEL using innterText
NB: make sure to not delete the existing content of the paragraph
*/
let saveEl = document.getElementById('save-el');



/* 
Lesson 13: Debugging Online
Google: innertext alternative mdn
*/

