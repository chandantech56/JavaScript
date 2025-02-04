function Display(){
    console.log("welcome to Besent technology")
}
Display()

function add(){
    let a =10;
    let b =20;
    let c = a + b;
    console.log("add: ", c)
}
add()  //30

//2nd methods parameter and arguments

function sum(x,y,z){
    let add= x+y+z;
    console.log(add)
}
sum(10,5,3); 

//Return statement
function multi(m,n){
    let p= m*n;
    console.log("hello")
    return p;
    console.log("hello")
}
console.log(multi(5,2))

// Arrow function

const greet = () => console.log("welcome")
greet()
//-------------
const add1 = (a,b) => console.log("sum:", a+b)
add1(5,10)

