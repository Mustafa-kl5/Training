console.log(Math.floor(15))
let name1:string="mustafa"
let age:number=20
let isLoggin:boolean=true
let all:any="mustafa mahmood"
all=100


function add(n1 :number, n2:number) {
    return n1 + n2;
}
console.log(add(10, 20));
console.log(typeof add(10, 20));

let showMsg=true

function showMsg1(name,age,salary){
    if(showMsg==true){return `hello${name} age ${age} salary ${salary} `}
}
