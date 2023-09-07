/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 

const sumAll = (a,b,c) => a + b + c;

let sum = sumAll(1,2,3)

console.log("Sum:",sum);

// Extra arguments are ignored

let sum2 = sumAll(1,2,3,4,5,6); // as you can see we have provided multiple argument parameters, only the first 3 are considered as the function was created with 3 parameters.

console.log("Sum2:",sum2) 

// Function using ...rest

const sumRest = (a,b,c,...rest)=> {  //rest is basically an array within the function , so a function array parameter. You dont need to call it rest, just use the ..."name" sytax, to imply that the function can take these parameters as optional, NOT REQUIRED
    let sum = a + b + c ; 
    for(let i of rest ) {   //Use a for of loop to basically state what the function needs to do if theres any addional parameters given other than the 3 requird
        sum += i ; 
    }
    return sum
}

let sum3 =sumRest(1,2,3,4,5,6);
console.log("Sum3:",sum3)