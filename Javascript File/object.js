//Object
let students = {id:123, name:"john", subject:"React"}
console.log(students) // id:123, name:"john", subject:"React"
console.log(students.name) //john
console.log(students.subject) //React
console.log(students["id"]) //
console.log(students.name= "john smith") //john smith new name
console.log(students.address= "bangalore") //add new value address:bangalore
console.log(students)

//array of object

let students1= [
    {id:123, name:"john", subject:"React"},
    {id:124, name:"sham", subject:"python"},
    {id:125, name:"david", subject:"js"},
    {id:126, name:"varner", subject:"css"},
    {id:127, name:"nik", subject:"html"},
]

console.log(students1)
console.log(students1[2])
console.log(students1[4].name)
console.log(students1[4].subject)

students1.map((data) => console.log(data.name))


