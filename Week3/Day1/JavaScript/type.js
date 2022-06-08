"use strict";
// const num1 = document.getElementById("num1")! as HTMLInputElement;
// const num2 = document.getElementById("num2")! as HTMLInputElement;
// const result = document.getElementById("result");
// const button = document.getElementById("button");
// const add = (numb1 : number , numb2:number  )=>{
// return numb1 + numb2
// }
// const clickButton = () => {
//     console.log(add(+num1.value , +num2.value)) 
// };
// function add(n1 : number , n2 :number ,result1 :boolean){
// return n1+n2+"  "+result1
// }
// const num1 =5
// const num2 =3
// const re=true
// const result = add(num1 ,num2 ,re);
// console.log(result)
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_only"] = 1] = "read_only";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
const person = {
    name: "mustafa",
    age: 30,
    hoppies: ["sport", "gaming"],
    role: Role.author
};
console.log(person);
for (const hop of person.hoppies) {
    console.log(hop);
}
console.log(person.role);
console.log("////////////////////////////////");
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    else
        return n1.toString() + n2.toString();
}
const num1 = 5;
const num2 = 3;
console.log(add(num1, num2));
console.log("////////////////////////////////");
console.log(add("mustafa", "mahmood"));
console.log("////////////////////////////////");
function add2(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    else
        return n1.toString() + n2.toString();
}
console.log(add2(num1, num2));
console.log("////////////////////////////////");
console.log(add2("mustafa", "mahmood"));
console.log("////////////////////////////////");
function addd(n1, n2) {
    return n1 + n2;
}
function print1(num) {
    console.log(num);
}
console.log(print1(addd(15, 10)));
