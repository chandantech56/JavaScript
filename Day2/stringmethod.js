// This is a some string methods in javascript
// -------------------------------------------------------

// String length
let a= "Hello! This is a javascript class"
console.log("lenght is:", a.length)


// String charAt()
let txt= "javascript"
console.log("values of the 3rd index: ", txt.charAt(3))
console.log("values of the 4th index: ", txt.charAt(4))


// String charCodeAt()
console.log( txt.charCodeAt(8))


console.log("slice is:", a.slice(2))
console.log("slice is:", a.slice(2,8))
// String substring()
// String substr()


// String Search Methods
console.log("search is: ", a.search('T'))
// String Templates
// String toUpperCase()
let x2= "javascript"
console.log(x2.toUpperCase());

// String toLowerCase()
let x3= "REACT"
console.log(x3.toLowerCase());

// endwidth()
console.log("endsWith: " ,x3.endsWith("T"));
console.log("endsWith: " ,x3.endsWith("A"));

// includes()
console.log("inclides: ",x3.includes("T"));
console.log("inclides: ",x3.endsWith("A"));

// indexof()
console.log("indexOf: ",x3.indexOf("C"));
console.log("indexOf: ",x3.indexOf("A" , 3));
console.log("indexOf: ",x3.indexOf("A" , 2));

// String concat()
let m= 'Ram '
let n= "is a very good boy"
console.log(m.concat(n))

// String trim()
let y5="   i like react.    "
console.log(y5.length)
let z= y5.trim()
console.log(z.length)

// String repeat()
console.log(m.repeat(5))

// String replace()
console.log(m.replace("Ram" , "Shyam"))


// String replaceAll()
console.log(n.replace(n , "Shyam  is my friend"))

// String split()
console.log(m.split())
console.log(m.split(""))
console.log(m.split())

// match()
let k= "yummy mango yummy"
let pattern= /mango/
console.log(k.match(pattern))