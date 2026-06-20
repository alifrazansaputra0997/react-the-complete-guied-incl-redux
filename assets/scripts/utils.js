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