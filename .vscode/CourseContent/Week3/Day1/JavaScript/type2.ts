class Dept {
    private name: string
    private employees: string[] = []

    constructor(n1: string) {
        this.name = n1
    }
    print() {
        console.log("hi sir " + this.name)
    }
    addEmployee(name1: string) {
        this.employees.push(name1)
    }
    printEmployeeInfo() {
        console.log("array length " + this.employees.length)
        this.employees.forEach(element => {
            console.log("name " + element)
        });
    }
}
const obj1 = new Dept("mustafa")
console.log(obj1)
obj1.print()
obj1.addEmployee("ahmad")
obj1.addEmployee("kamel")
obj1.addEmployee("amer")
obj1.addEmployee("lena")
obj1.printEmployeeInfo()

class Person {
    protected name: string
    protected Age: number
    constructor(n1: string, age: number) {
        this.name = n1
        this.Age = age
    }
    print() {
        console.log(`Person name ${this.name} `)
        console.log(`Person Age ${this.Age} `)
    }

}
class Student extends Person {
    private Specialty: string
    private classLucture: string[] = []
    constructor(name: string, agr: number, se: string, cl: string) {
        super(name, agr)
        this.Specialty = se
        this.classLucture.push(cl)
    }
    print() {
        console.log(`Person name ${this.name} `)
        console.log(`Person Age ${this.Age} `)
        console.log(`student Specialty ${this.Specialty} `)
        this.classLucture.forEach((item) => {
            console.log(`student class  ${item} `)
        })

    }
    addClass(item: string) {
        this.classLucture.push(item)
        console.log(`${item} has been insert`)
    }
}

const p1 = new Person("mustafa", 21)
p1.print()
const s1 = new Student("AHMED", 50, "MATH", "PROP")
s1.addClass("CALC")
s1.addClass("NUM")
s1.addClass("CALC3")
s1.addClass("DAF")
s1.print()

abstract class car {
    protected name: string
    protected company: number
    constructor(n: string, m: number) {
        this.name = n
        this.company = m
    }

    abstract print(): void;
}

class Bmw extends car {

    print() {
        console.log( this.name)
        console.log(this.company)
    }

}

const c1 = new Bmw("m5",2015)
c1.print()