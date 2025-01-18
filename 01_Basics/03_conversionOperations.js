// let Score = "33abc" ;  
// let Score = null ;  //output NaN
// let Score = undefined ; 

// let Score = true ; //outputs 1 
let Score = false ; //outputs 0 


//two ways to know the type of the variable

console.log(typeof Score) ;
console.log(typeof(Score)) ;

//here what we are trying to do is that we are converting an string to an integer number by using this Number keyword before the name of the variable whose data type we wanna change

let valueInNumber = Number(Score)
console.log(typeof valueInNumber);

console.log(valueInNumber)



//Notes

// "33" => 33 easy to convert
// "33abc" => NaN [Not a Number]   When We try to convert a number and alphabets to numbers will result in this error 
// true => 1; false => 0

// let isLoggedIn = 1
let isLoggedIn = 0

//to convert this :- 1 => true , 0 => false
// "" = false
// "hitesh" => true

let  bolleanIsLoggedIn =  Boolean(isLoggedIn);
console.log(bolleanIsLoggedIn) ;

let someNumber = 33;

let stringNumber  =  String(someNumber) ;
console.log(stringNumber);
console.log(typeof stringNumber);
