
let hasCompletedCourse = true
let givesCertificate = true
 if (hasCompletedCourse === true && givesCertificate === true) { 
    generateCertificate()
 }

function generateCertificate() { 
console.log("Generating certificate...");

}


/* 
Challenge: Write your first logical operator

1. Create an if statement that checks that both variables are false.
2. If so, run the showSolution() function
*/
let hasSolvedChallenge = false
let hasHintLeft = false;

if (hasSolvedChallenge === false && hasHintLeft === false) {
    showSolution()
}
function showSolution() {
    console.log("Showing solution...");
} 


// /*
// console.log(true && true);       // true
// console.log(true && false);      // false
// console.log(false && false);       // false
// console.log(false && ture);      // false
// *\

let hasPass= true
let hasGift =true 


if (hasPass === true && hasGift === true){
issue()
}
function issue() {
    console.log("my gift");
    
}

// console.log(true || false);   // true
// console.log(false || false);  // false

let hasPC=true
let hascom=true

if ( hasPC === false || hascom === false){
    getPc()
}

function getPc() {
    console.log(yay);
    
}


/* 
Challenge:

1. Create two boolean variables, likesDocumentaries and likesStartups
2. Use an OR statement (||) to call recommendMovie() if either of those variables is true
*/

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, you will like this new movie we recommend!");
}