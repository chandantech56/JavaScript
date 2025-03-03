console.log("Hello ji")

// prompt("Enter ")
// prompt("Enter second number")
// alert("Do you have indian?")


// function mult(a,b){
//     return(
//         console.log  ("mul =", a*b),
//         document.write("mul =", a*b)
//     )
// }
// mult(5,6);

// "<br/>"



// function sum(x,y) {
//     return(
//        console.log(x+y) 
//     )
// }
// sum(4,9)
// sum(4,8)
// // object
// const car ={model:"maruty800", 
//     carname:"maruti",year:"2003"}
// console.log(car.model)

// // const person = {
// //     fname:"ch", 
// //     lname:"kr",
// //     age:50,
// //     color:"white"
// // }
// // console.log("this is a:", person.fname,person.lname,"age is :", person.age , "years old")

// // function full(){
// //     return(
// //       console.log(person.fname, person.lname)
// //     )
// // }
// // full()
// // const a= person
// // a.age=15
// // console.log("age is", person.age)
// // person.nationality = "english"
// // console.log("national is", person.nationality)

// // delete person.nationality;
// // console.log("national is", person.nationality)

// const chandan ={
//     fname:"ch",
//     age:30,
//     car:{
//         car1:"bmw",
//         car2:"safari"
//     }
    
    
// }
// console.log(chandan.fname, chandan.car.car2);
// console.log(chandan["fname"]);


// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     // fullName: function() {
//     //   return( 
//     //     console.log(person.firstName , person.lastName))
//     // }
//   };
//   console.log("my father is :", person.firstName , person.lastName)

//   const myArray = Object.values(person);
//   console.log(person)

// const fruits = {Bananas:300, Oranges:200, Apples:500}; 

// let text = "";
// for (let [fruit, amount] of Object.entries(fruits)) {
//   text += fruit + ": " + amount + "<br/> " ;
// }
//  document.write(text)

// function myfunction(){
//     document.getElementById("demo1").innerText = "YOU CLICKED ME!";
// }



// const fruit = ["mango", "banana","kiwi", "arange"]
// fruit.slice(2);
// document.getElementById("demo").innerHTML= fruit;

// let arr =[1,decodeURI,23
// ]
// console.log(arr)

// console.log(arr[1])
// arr.push(5)
// console.log(arr)
// let arr1 =[55,25,"ch"]
// let arr2 =[ 100,103,"jack"]
// a= arr1.concat(arr2)
// console.log(a)

// // let x= [5,7,1,6,3,2]
// // sort.x()
// // console.log(x)
// let y = [5,41,24,425,58,422,57,12,8,526]
// y.splice(0,2,500,600,700)
// console.log(y)
// let z = [5,41,24,425,58,422,57,12,8,526]
// z.slice(5)
// console.log(z)

// let w = [1,2,3,5,6,7]
// for (let index = 2; index < w.length; index++) {
//     const element = w[index];
//     console.log(element);
    
// }

// w.forEach((value, index, arr)=>{
//     console.log(value,index,arr);
    
// })
// let obj = {
//     a: 12,
//     b: 13,
//     c: 14
// }

// for (const key in obj) {
//     if (obj.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
        
//     }
// }

// for (const element of w) {
//     console.log(element);
// }

// // map

// let s =[1,5,6,7,8]
// let newarr = []
// for (let index = 0; index < s.length; index++) {
//     const element = s[index];
//     newarr.push(element**2)
// }
// console.log(newarr);


// let newarr = s.map((e) =>{
//      return e**2
// })
// console.log(newarr);


// filter
// const greterSeven= (e) =>{
//     if(e > 7){
//     return true;
//     }
//     return false;
// }
// console.log(s.filter(greterSeven));

// // reduce

// let arr3 =[1,2,3,4,5,6]
// const rd = (a,b) =>{
//     return a*b
// }
// console.log(arr3.reduce(rd));

// //-----------------
// const rd2 = (a,b) =>{
//     return a+b
// }
// console.log(arr3.reduce(rd2));




// let as = [1,2,3,4,5]
// const newarr5 = (a,b) =>{
//     return a*b
// }
// console.log(as.reduce(newarr5));


// let nwe = as.map ((e)=>{
//     return e**2
// })
// console.log(nwe);


