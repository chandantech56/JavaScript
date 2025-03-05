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
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("c")); //2 index

const anotherString =  gameName.slice(1, 4)
// console.log(anotherString);
const myName = "chandan"
// console.log(myName.replaceAll("chandan", "kumar"));

const Number = 23.589
// console.log(Number.toFixed(2)); // 23.00

const Number1 = 10000000
// console.log(Number1.toLocaleString("en-IN"));

//*********maths*************** */
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.sqrt(4));
// console.log(Math.min(4,8,10,15,3,2,));

// console.log(Math.random());
// console.log((Math.random()*10) +1);

const min = 10
const max = 20
// console.log(Math.floor(Math.random() *(max - min +1)) + min);

//****************Date***********************
// let myDate = new Date();
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreateDate = new Date(2025, 0, 25); //in month index value take
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

let newDate = new Date()
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());


//********************* Arrays  ******************** */

const myArray = [0,1,2,3,4,5,6,7]
// console.log(myArray);
// console.log(myArray[2]);

// Arrays Methods

// myArray.push(10);  //add last element
// console.log(myArray);
// myArray.pop();      //Remove last element
// console.log(myArray);
// myArray.shift();    //Remove First element
// console.log(myArray);
// myArray.unshift(15);  // Add first element
// console.log(myArray);

// console.log(myArray.includes(6));
// console.log(myArray.indexOf(6));

// console.log(myArray.slice(1,5));
// const narray = myArray.splice(1,5)
// console.log(myArray.splice(1,5));

const Heros = ["thor", "ironman", "Super"]
const dcHero = ["thomas", "steelman", "Superpower"]
// Heros.push(dcHero)   //1st method for Add
// let allHero= Heros.concat(dcHero)   //2nd method for Add

// const allNew = [...Heros,...dcHero]  //3rd method for add array
// console.log(allNew);

// const newA = [1,2,3[4,5,6[7,8[9,10]]]]
// const real_array = newA.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray("chandan"))
// console.log(Array.from("chandan"))    //convert in arrays
// console.log(Array.from({Name: "chandan"}))    //convert in arrays

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of (score1,score2,score3)); //convert arrays 3rd methods


//******************Objects**************** */

// Object Literals
const jsUser = {
   name : "chandan",
   "full Name":" Chandan kumar",
   age  : 25,
   email: "chandan@google.com",
   isloggin : false
}

// console.log(jsUser);
// console.log(jsUser.email);  //1st methods
// console.log(jsUser["full Name"]);  // 2nd methods
// jsUser.email = "chandan@microsoft.com"
// Object.freeze(jsUser)      // freeze value not change
// jsUser.email = "chandan@ai.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//    console.log("Hello Js")
// }
// console.log(jsUser.greeting());

// jsUser.greeting2 = function(){
//    console.log(`Hello ${jsUser["full Name"]},your age is: ${jsUser.age} and your email id is : ${this.email}. Thank you for visiting`)
// }
// jsUser.greeting2();

const tinderuser = {}
 tinderuser.id = 123,
 tinderuser.name = "chk"
//  console.log(tinderuser);
//  console.log(tinderuser.hasOwnProperty("isLocked"));
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));



const obj1= { 1: "a", 2: "b"}
const obj2= { 3: "c", 4: "d"}
const obj3= Object.assign({} , obj1,obj2)
// console.log(obj3);

 const course = {
   course: "js in hindi",
   price : 9655,
   courseInstructure: "hitesh"
 }
const {courseInstructure: instructure} = course
// console.log(instructure);

//************Json************ */

// {
//     "name" : "chandan",
//     "courseName" : "js in hindi",
//     "price": "free"
// }

//********************Functions******************** 

function myName1 (){
   // console.log("hello");  
}
// myName1()

function addNumber(a,b){
   // console.log(a + b)
}
// addNumber(5,3)

function addNumber(a,b){
   let result = a + b
   return result
}
const result = addNumber(5,3)
// console.log(result);

function userlog(username){
   `${username} , loged in`
   // console.log(username);
   
}
userlog("Chandan")

function calculateCartPrice(...num1){   // ()...spred operator)
   return num1
   
}
// console.log(calculateCartPrice(100,200,500,300));

const  user = {
   userName :"chandan",
   price : 999
}
function handleObject(anyobject){
   //  console.log(`userName is ${anyobject.userName}, price is: ${anyobject.price} `);
    
}
handleObject(user)

const arrayNew = [200,300,400,500,100]
function returnSecondvalue(getArray){
   return getArray[2]
}
console.log(returnSecondvalue(arrayNew));


// const user5= {
//    Name : "chandan kt",
//    age : 35
// }

// function printuser(user) {
//    return user
   
// }
// console.log(printuser(user5));


// ********** Scope *********************
//global scope {inside bracket}, and Block scope {} Outside bracket.

// function one(){
//    userName = "Chandank"
//    function two(){
//       email = "hello@gnaijk.vkl"
//       console.log(userName);
//       console.log(email);
//      function three(){
//       last2 = "kumar"
//       console.log(last2)
//      }
//      three()
//    }
//    two() 
// }
//  one()

//  **************Arrow Function =>  ***************
// const user3 = {
//    userName: "chandan kk",
//    id : "12",
//    WelcomeMessage : function sms (){
//       console.log(`${this.userName}, welcome to website`);
//    }
// }
// user3.WelcomeMessage()

// user3.userName = "sham"
// user3.WelcomeMessage()

const chai = ()=>{
   let userName = "chandankkk"
   // console.log(userName)
}
chai()

const addnum = (a, b)=>{    //1st methods
   return  a + b
}
//   console.log(addnum(5,4));
//---------------------

const addnum1 = (a, b)=>  (a + b )   // 2nd methods
// console.log(addnum1(5,3));

// Imediately Invoked Function Expression (IIFE)
(function chai() {
   //   console.log("Hello Dear");   
}) ();

//2nd method in arrow function
(  (name) => {
   //  console.log(`Hello dear ${name}`);  
} )("Chandan")


const myn = () => {
   // console.log("hello");
   
}
myn()

//  if statement
const temperature = 60;
if (temperature === 40){
   console.log("less than 50");
   
}else {
    console.log("grater than 50");
   
}





