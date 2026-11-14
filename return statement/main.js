let test1 =50
let test2 =40

function total(){
return test1+test2;

}
let result =  total()
console.log(result);

let player1Time = 200
let player2Time = 203

function getRacingTime(){
      if (player1Time < player2Time) {
     return player1Time;
      
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return player1Time;
    }
}
let playerResult = getRacingTime()
console.log(playerResult);

function totalRaceTime(){
    return player1Time+player2Time;
}
let playerTotal = totalRaceTime()
console.log(playerTotal);

/* 
Challenge: 
1. Write a function that returns the total race time
2. Call/invoke the function and store the returned value in a new variable
3. Finally, log the variable out
*/
