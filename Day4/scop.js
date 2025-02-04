// Scope :

var num = 20                   //global scope
function display(){
    var res = num*num
     txt = "hello"               //local scope
     console.log("result:", res)
     console.log("txt:", txt)
     if (num===20){
        var txt2 = "hi"
        console.log("i am inside:", txt2)
     }
}
display()
console.log("txt:", txt)
// console.log("i am inside:", txt2) //throw error bcz out side function not allowed.


//var
var x = 20
x = 40 //Reassignment values allowed in var,
x = 30 //Redeclaration values allowed in var,
console.log(x)

// let
let y = 50
y = 40 //Reassignment values allowed in let,
y = 30 //Redeclaration values is not allowed in let,
console.log(y)

//const
const z = 90
z = 40 //Reassignment values is not allowed in const,
z = 30 //Redeclaration values is not allowed in let,
console.log(z)


// Hosting in var
x1 = 20
console.log(x1)
var x1

// Hosting in let
y1 = 20
console.log(y1)
let y1

// Hosting in const
z1 = 20
console.log(z1)
const z1
