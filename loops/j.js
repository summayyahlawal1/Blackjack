/*
1. string concatination
2. DOM manipulation
3. primitive datatype (string , number and boolean)
4. conditional statements
5. Array
6. Array methods (push, pop, shift, unshift, splice)
7. Loop
 */
// let num = 10

// for( let i = 0; i < 11; i = i + 1 ){
//     console.log(i)
// }

// let messeage =[
//     "hey, how are you.",
//     "fine, and you.",
//     "fine, what are you doing.",
//     "i am coding.",
//      "me too.",
//      "nice to hear.",
//      "thanks.",
//      "you are wlecome.",
//      "What are you making.",
//      " I'm making a shop.",
//      " Oh, me too , I'm making a shop that actually works. What about you? ",
//      "I'm just designing.",
//      " That's nice.",
//      "🙌"

// ]
// for( let i = 0; i < messeage.length; i++ ){
//     console.log(messeage[i])
// }

// Render the sentence in the greetingEl paragraph using for loop and greetingEl.textContent
// using the array of strings provided below. You should see all the strings rendered in the paragraph
   
    

let sentence = [
"my ",
"name", 
"is",
" summayyah"
]

        let myMessageEl = document.getElementById("myMessage-el")
        console.log(myMessageEl);
        

for( let i = 0; i < sentence.length; i++ ){
    console.log(sentence[i])

    // messageEl.textContent +=sentence[i]

}
