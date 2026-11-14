let num1 =8
let num2 =8

document.getElementById('num1-el').textContent= num1
document.getElementById('num2-el').textContent= num2

let result= document.querySelector('.result')
function add(){
    let sum = num1 + num2
result.textContent = 'The answer is' +sum
}
function subtract(){
    let sum = num1 - num2
result.textContent = 'The answer is' +sum
}
function divide(){
    let sum = num1 / num2
result.textContent = 'The answer is' +sum
}
function multiply(){
    let sum = num1 * num2
result.textContent = 'The answer is' +sum
}