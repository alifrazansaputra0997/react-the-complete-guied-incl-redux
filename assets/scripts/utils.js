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

// working with array
const hobbies = ["Sprort", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === "Sprort"
});

console.log(index)

// make it short 

const index2 = hobbies.findIndex((item) === "Sprort")

// array map, this function is could create array to new array

const edittedHobbies = hobbies.map((item) => item + "!") 

// use map again

const edittedHobbies = hobbies.map((item) => ({
    text: item
}))

// distructering sysntax (direct pull out)
// instead of creating new variable to get output data from several code, you could get the data by destructering the code like

// example destructering of array
const [firstName, lastName] = ['Alif', 'Saputra'] 

// example destructering of object
const {name, age} = {
    name: 'Alif',
    age: 29
};

// you also could set alias name
const { name: userName, age} ={
    name: 'Alif',
    age: 29
}

// Separated Operator ...
// pull out object or array

const userObj = {
    name: 'alif',
    age: 23
}

console.log(...userObj)

const dataArr = ["Reading"];
console.log(...dataArr)

console.log(userName) 