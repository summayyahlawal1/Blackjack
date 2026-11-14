
// Render the sentence in the greetingEl paragraph using for loop and greetingEl.textContent
// using the array of strings provided below. You should see all the strings rendered in the paragraph
let sentence = ["Hey,"," my"," name", " is"," summayyah,"," I"," am"," ten"," years"," old"]
let textEl = document.getElementById('text-el');

// console.log(textEl);

for( let i = 0; i < sentence.length; i++ ){
    // console.log(sentence[i])


    textEl.textContent +=sentence[i]
}