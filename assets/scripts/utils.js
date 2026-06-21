export const apikey = "bbbb";

export const apikey2 = "cccc";

// you could use $ and _ symbols to naming your variables
let $checkname = "helloworld"
let _checkname = "helloworld"

//  Code Excercise: Working with Functions
combine(a,b,c){
    return a * b / c;
}

console.log('CALCULATE 1,2,3 = ', combine(1,2,3))

// arrow function
// some of the function doesnt need a name so you could leave it blank and use the arrow function
export default (param1, param2) => {

}
() =>{
    console.log('xx')
}
(param1,param2) => {

}

// instead of
number => {
    return number * 3;
}
// you could write
numberx => numberx * 3;

// returning object
numbery => ({ age: numbery })

// Object could be cobination from varibales and function.
const data = {
    name: 'Alif',
    age: 29,
    greet() {
        return "Hello World"
    }
}

const data = {
    name: 'Alif',
    age: 29,
    greeting: (name) => {
        return "Hello" + name
    }
}


class User {
    constructor(name, age){
      this.name = name;
      this.age = age  
    } // constructor will accept parameters

    greet(){
        console.log('HI')
    }
}

const user1 = new User('alif', 29);