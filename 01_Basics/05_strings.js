const name = "harsh" ;
const repoCount = 50 ;

//to concatenate it

// console.log(name + repoCount ) ; not used nowadays to output using this so what we use is below by using `` backticks and ${} use of dollar below is an example of it 

console.log(`Hello my name is ${name}  and my repo count is ${repoCount}`) ;


//how to declare string 

const gameName = new String('HarshSingh') ;

console.log(gameName) ;


//string methods

//to access string specific element 

console.log(gameName[0]) ; //output H

//Length method = it return the length of the string
 console.log(gameName.length) ; //outputs the length of the string 

//convert the string into upper and lower case using the toUppercase() and toLowerCase() functions or methods

console.log(gameName.toLowerCase()) ; //IT WILL TURN THE STRING TO LOWER CASE BUT IT DID NOT CHANGE THE ORIGINAL VALUE AS STRING IS THE STACK VALUE IT MAKE CHANGES IN THE COPY OF THE STRING

/*
There are 4 methods for extracting string characters:

The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
*/


console.log(gameName.charAt(2)) ; //to know what value is at any specific index we use this

console.log(gameName.indexOf('a')) ; // to know at what index the value of a is we use indexof method

console.log(gameName.at(2)) ; //using the at() function to know what value is at specific index


/*
Slicing in Strings we use this methods to achive that and the most important thing is that it returns -1 value for example if we say .slice(0,4); so it will return only 4 values not 5 as the index start from 0.

Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

const newString = gameName.substring(0, 4) ;
console.log(newString);

const anotherString = gameName.slice(0, 4) ; //we can give both negative values in slice which we cannot do in substring this is an  advantage of slice function

const anotherString1 = gameName.slice(-1, -10) ;

//later

