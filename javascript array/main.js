// // javascript array

// let myProfile =[
//     "name",    // 0
//     "age",     //1
//     "occupation", //2
//     "gender"   //3
// ]
// // Access to myProfile

// console.log(myProfile)

// // Access each item

// console.log(myProfile[2])
// // Access number  item
// let arrayItem = myProfile .length

// console.log(arrayItem)

// // console.log(myProfile .length)


// // Add new item to an array

// // console.log(  myProfile   .push( "hobbies","contry"))
//  let newArray =myProfile.push( "hobbies","contry")
//  console.log(newArray)

 
//  Challenge:
//  1. Create an array that list your i.e name, occupation, experience, education, location
//  2. The items of the array should be strings
//  3. Make occupation and location appear in the console

let profile =[
    "summayyah",    // 0
    "coding",     //1
    "bike", //2
    "math" ,  //3
    "canadan"   //4
]

console.log(profile)

console.log( profile [1])

console.log( profile [2])

/* 
Array - ordered list of items - composite / complex data type

1. Create an array that describes yourself. Use the three primitive data types you've learned.
   It should contain your names (string), your aga (number), and whether you like pizza (boolean) 
*/

let myself = [
    "Summayyah",  // string
    10,            // number
    true           // boolean
]

console.log(myself);

let cards = [5,4,2]

console.log(cards)

cards.push(10)
console.log(cards)

let lastCard = cards.pop();
console.log(lastCard)

cards.push('summayyah')
console.log(cards)

let firstCard = cards.shift(); 
console.log(firstCard)

cards.unshift(6,7);
console.log(cards)