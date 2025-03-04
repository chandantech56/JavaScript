console.log("Javascript start");
// const accountId= 1245;
// let email = "ch@gmail.com";
// var accountPassword = "12345"
// accountCioty = "Bangalore"


// console.table([accountId, email, accountPassword,accountCioty]);
/*Data types : primitive data types
Number
boolien
String
undefined
Symbol
BigInt
null.

/*Data types : Reference(primitive data) types
array
object
function.
*/
//----------------Conversion------------------------
//conversion
// 1 => true
// 0 => false
// " " => false
// "chandan" => true.
 let score = 33;
//  console.log(typeof score);
 let isLodgeIn = 1
 let booleanIsLodgein= Boolean(isLodgeIn)
//  console.log(booleanIsLodgein);

// convert number to string
 let number = 33
 let str=  number.toString() //string(number) 2nd methods
//  console.log(typeof str);
 
 //**************Operations***************************

let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "Hello "
let str2 = "Chandan"
let str3 = str1  + str2
// console.log(str3);

//  console.log(1 + "2");
//  console.log("1" + 2);
//  console.log(1 + 2 + "2");
 
//  ***********comparison operator****************

// console.log(null > o);
// console.log(null < o);
// console.log(null >= o);
// console.log(null == o);
// console.log("2" === 2);


//************string********** */
let userName= "chandan"
   let  gpay= "hgghhs22@gpay"

// console.log(user);
console.log(`this is a ${userName} , and your gpay is ${gpay}`);

const gameName = new String("Racing car")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(5));
console.log(gameName.indexOf("c")); //2 index

const anotherString =  gameName.slice(1, 4)
console.log(anotherString);
const myName = "chandan"
console.log(myName.replaceAll("chandan", "kumar"));




