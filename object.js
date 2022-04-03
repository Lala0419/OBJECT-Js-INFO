// 1. Hello, object

// importance: 5
// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user ={}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

//===========================================================================================


// 2. Check for emptiness
// importance: 5
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

function isEmpty(obj) {
    for(let key in obj) {
        return false;
    }
    return true;
}

console.log(isEmpty(schedule)) //true


// - get the geys
// schedule["8:30"] = "get up";
// schedule.name = "school day"
//console.log(object.keys(schedule)) //["8:30","name"]


//=======================================================================================


// 3. Sum object properties

// importance: 5
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

//Note: even if we write this way, it works as well
//let salarries = [100,160,130]


// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let sum = 0
for(let key in salaries){
    sum += salaries[key]
}
// Note: 'key' is the key to unlock the value using the property key.. we want to evaluate the value of 'key' and get whatever value it has, and use that value as the key to accsess the value of.. lol

console.log(sum)


// let sum = salaries.reduce((acc,c)=>acc+c,0)

// console.log(sum)

//=====================================================================================================


// 4. Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
  depth: 10
};

function multiplyNumeric(obj) {
    for(let key in obj){
        obj[bloop] *=2
    }
} //width: 400,
//  height: 600,
//  title: null
//  depth: 20

//Note: so we wanna use typeof to make sure it is Number

function multiplyNumeric(obj) {
    for(let key in obj){
        if (typeof obj[key]=='number') {
            obj[bloop] *=2
        }
    }
}
// }width: 400,
//  height: 600,
//  title: "My menu",  //so it skips this one
//  depth: 20



// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

//=============================================================================

//----------OBJECT METHOD, THIS-----------------------------------------

// 1. Using "this" in object literal
// importance: 5

// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

console.log( user.ref.name ); // What's the result? // 'codepen' w May

//Note: in this case, ref: this is not a method, so when you console.log, and see ref there which is 'this', can not find the parent function because makeUser() is its function. so.. you have to make it as a method like below ( which now become a function inside of the makeUser function )

function makeUser() {
  return {
    name: "John",
    ref(){
        return this;
    } 
  };
}

let user = makeUser();

console.log( user.ref.name ); // What's the result? // "John" Note: *essencially console.log(makeUser().name);

//=====================================================================


//2.  Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//     read() {
//         this.numa= +prompt('enter the first number', 0)
//         this.numb= +prompt('enter the second number', 0)
//     },
//     sum() {
//         return this.numa + this.numb
//     },
//     mul() {
//         return this.numb * this.numb
//     },
//   // ... your code ...
// };

// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );
// //Run the demo


// 3. Chaining
// importance: 2
// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log( this.step );
    return this;
  }
};
// Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

// Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such approach is widely used across JavaScript libraries.

// Open a sandbox with tests.

//=========================================================================================================

//----------------CONSTRUCTOR, OPERATOR "NEW"------------------------

// 1. Two functions – one object
// importance: 2
// Is it possible to create functions A and B so that new A() == new B()?
let obj = {}

function A() { 
  return obj;
 }
function B() {
    return obj;
}

let a = new A;
let b = new B;

 console.log( a == b ); // true

 //Note you can return things only if it was on object. also if you comment out the returns, it will give you false..

// If it is, then provide an example of their code.

//========================================================================================================

// 2. Create new Calculator
// importance: 5
// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:



function Calculator() {

    this.read = function() {
    this.numa = +prompt("Provide first number", 0)
    this.numb = +prompt("Provide second number", 0)
    }

    this.sum = function() {
        return this.numa +this.numb
    }

    this.mul = function() {
        return this.numa * this.numb
    }
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );

//=======================================================================================================


// 3. Create new Accumulator
// importance: 5
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function() {
        this.value += +prompt ('enter a number to add', 0)
    }
}

 let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values



