let arr = ["hello", 123,22.3, false];
console.log(arr);
// unshift= add new element in begining
let color=["black", "green", "white","grey"]
color.unshift("red");
console.log("color:", color, "length:", color.length);

// shift=  Remove element in begining
color.shift("red");
console.log("color:", color, "length:", color.length);


// push=  add element in last
color.push("brown");
console.log("color:", color, "length:", color.length);

// pop=  Remove element in last
color.pop();
console.log("color:", color, "length:", color.length);

// splice = 
color.splice(1,2,"yellow");
console.log("color:", color, "length:", color.length);

// sort=  accending to deccending values
let x= [5,8,1,3,7]
x.sort();
console.log(x)

// // reverse=   descending to ascending values
// console.log(x.reverse());

let x1= "apple"
let y= x1.split(" ");
let z= y.reverse(" ");
let z1= z.join(" S");
console.log(z1)

let num = [5,4,3,8]
console.log(num.reduce)
