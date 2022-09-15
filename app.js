/* What can you do


 const prompt = require('prompt-sync')({sigint: true});

 let age = Number (prompt("What is your age "))

 if (age < 16) {
     console.log("You can't drive!")
 } else if (age === 16 || age === 17){
     console.log("You can drive but not vote.")
 } else if (age === 18 || age <= 24){
     console.log("You can drive but not vote.")
} else if (age >= 25){
     console.log("You can do pretty much anything.")
 }

 console.log(age)
 */




//Days of the Week

 // const prompt = require('prompt-sync')({sigint: true});


// let num1 = Number(prompt("pick a number 1 - 7 "));
 
//  if (num1 === 1) {  
//      console.log("Monday");
//  } else if (num1 === 2) {
//      console.log("Tuesday")
//  } else if (num1 === 3) {
//      console.log("Wednesday")
//  } else if (num1 === 4) {
//      console.log("Thursday")
//  }else if (num1 === 5) {
//      console.log("Friday")
//  }else if (num1 === 6) {
//      console.log("Saturday")
//  }else if (num1 === 7) {
//      console.log("Sunday")
//  }else {
//      console.log ("Error");
//  }


 





 //Space Boxing



// const prompt = require('prompt-sync')({sigint: true});
// let earthWeight = Number(prompt("What is your Earth Weight? "));
// let venusWeight = (earthWeight * 0.78)
// let marsWeight = (earthWeight * 0.39)
// let jupiterWeight = (earthWeight * 2.65)
// let saturnWeight = (earthWeight * 1.17)
// let uranusWeight = (earthWeight * 1.05)
// let neptuneWeight = (earthWeight * 1.23)
// let planet = (prompt("What planet do you want to know your calculated weight for? "));
// if (planet === "venus") {  
//     console.log("Your Earth Weight calculated on this planets gravity is: " + venusWeight);
// } else if (planet === "mars") {
//     console.log("Your Earth Weight calculated on this planets gravity is: " + marsWeight)
// } else if (planet === "jupiter") {
//     console.log("Your Earth Weight calculated on this planets gravity is: " + jupiterWeight)
// } else if (planet === "saturn") {
//     console.log("Your Earth Weight calculated on this planets gravity is: " + saturnWeight)
// }else if (planet === "uranus") {
//     console.log("Your Earth Weight calculated on this planets gravity is: " + uranusWeight)
// }else if (planet === "neptune") {
//     console.log("Your Earth Weight calculated on this planets gravity is: " + neptuneWeight)
// }else {
//     console.log ("not a planet");
// }



// FizzBuzz



const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt("Pick a number lets hope it works: "));
if(num1%3 == 0){
    console.log("fizz")
} if(num1%5 == 0){
    console.log("buzz")
} if(num1%15 == 0){
    console.log("fizzbuzz")
}



//Group Sizing

// const prompt = require('prompt-sync')({sigint: true});

// let classSize = Number(prompt("Enter class size: "));

// let groupsOf3 = 0;
// let groupsOf2 = 0;

// //evenly divisible

// if (classSize % 3 === 0) {
//     groupsOf3 = classSize/3;
// //groupsOf2 = 0;
// }
// //remainder 1
// if (classSize % 3 === 1) {
//     classSize -= 4;
//     groupsOf2 = 2;
//     groupsOf3 = classSize / 3;
// }
// //remainder 2
// if (classSize % 3 === 2) {
//     classSize -= 2;
//     groupsOf2 = 1;
//     groupsOf3 = classSize / 3;
// }

// console.log("Groups of 3: " + groupsOf3);
// console.log ("Groups of 2: " + groupsOf2);







