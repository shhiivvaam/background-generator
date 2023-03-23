// Prompt

var one = prompt("Enter the First Number : ");
var two = prompt("Enter the Second Number : ");

var three = Number(one) + Number(two);


// Alert

alert("hii there!")

var one = prompt("Enter the First Number : ");
var two = prompt("Enter the Second Number : ");

var sum = Number(one) + Number(two);
alert("The Sum is : " + sum);


// Conditionals

var name = "Billy";

if(name === "Billy") {
    alert("hii Billy");
} else if (name == "sussy") {
    alert("hii susy");
} else {
    alert("hmm I don't know");
}



// to insert an javascipt file you can do it by adding {script} after the end of the body, because we want to first load the website and the perfomr the rest actions and so we add javascript file after loading all the html and css files



// Printing

console

console.log("Shivam");
console.info("hello");

console.error("Error");


// Function Decleration

function sayhello() {
    console.log("hello");
}

sayhello();          // function calling


// Arguments in Functions

function sing(song) {
    console.log(song);
}

sing("hello there I am Shivam Kumar");


// Arrays

var list = [
    ["apple", true, 3, apple()]
]
list                                        // we can print list with both ways either by just writing the name i.e, list or by writing it inside the console.log() section
console.log(list);

var mylist = ["shivam", "somya", "surbhi", "shachi", "Rajesh"]
var mynewlist = mylist.concat(["Shhiivvaamm"]);

mylist
mynewlist
console.log(mylist);
console.log(mynewlist);


// Objects

var users = {};

var user = {
    name : "Shivam",
    age : 19,
    dream : "Richer and More Richer and More Richer",
    spells : ["abrakadabra", "shivam", "somya", "surbhi", "shachi", "rajesh"]
};

user
console.log(user)
user.name
console.log(user.name)

user.language = "Hindi";                // through this we ccan add some more elements inside our object ouside the objects manually


//this is an clasical example of an array inside an Object

var user = {
    name : "Shivam",
    age : 19,
    dream : "Richer and More Richer and More Richer",
    spells : ["abrakadabra", "shivam", "somya", "surbhi", "shachi", "rajesh"]
};

user
user.spells[0];
user.spells[3];


// this is a classical example of an object inside an array

var list = [
    {
        username : "Shhiivvaam",
        password : "secret"
    },
    {
        user : "Shivam",
        quality : "Good Person"
    }
];
list[0].password


// this is an classical example of adding an function in an Object


var user = {
    name : "Shivam",
    age : 19,
    dream : "Richer and More Richer and More Richer",
    spells : ["abrakadabra", "shivam", "somya", "surbhi", "shachi", "rajesh"],
    shout : function() {
        console.log("Shhhhiivvaaaaaaammm!!!!!");
    }
};
user.shout()


// Empty Obj

var emptyObj = {};
emptyObj.name = "Shivam";

emptyObj
console.log(emptyObj);

// null

var nullObj = null;

nullObj
console.log(nullObj);


// Loops

// For Loop
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for(var i = 0;i<todos.length;i++) {
    console.log(todos[i]);
}

// While Loop

var counterOne = 0;
while(counterOne == 10) {
    console.log(counterOne);
    counterOne++;
}

// do-while

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 10)

// For Each Loop

todos.forEach(function(todo) {
    console.log(todo);
});

//or

function logTodos(todo, i) {
    console.log(todo,i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);

// getElementByTagName
        // > it returns an Arrray of Element
        // > and remember to use it as an Array, i.e, by adding [i] indexes like this.


// add Event Listener

_____Name____.addEventListener("Event_Name", function() {
    console.log("Click!!!!");
});

// ex > :
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("clickeddd");
    alert("clickeddd");
});

// we can add event like >  1. click
                            // 2. mouseenter


// To Change The BackGround of the Page using JavaScript

body.style.background = "red";
// > for this to work you first need an cody selector i.e,
                            // > var body = document.getElementById("body");
                            // simply give the Body Tag an ID named Body and then do the above changes




ECMASCRIPT(ES6) === JAVASCRIPT

// variables

// let ---> it has the value ony inside a scope and changes out side the scop

// var ---> it has the scope thorugh-out the body and changes both inside and outside the loop

// const ---> const cannot be changed and its value is fixed thorugh-out the body, and an assignment to a const value is invalid
                // but in constant(const) you can re-assign the value of the variables of an Object but you cannnot change he variables of the Object

const obj = {
    player : "Shivam",
    experience : 100,
    wizardLevel : false
}

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// OR
const {player, experience} = obj;               // both above code and this is same and can be used instead but this below code looks more professional and clean and the upper one looks good but messy
let {wizardLevel} = obj;


// Arrow functions

function add(a, b) {
    return a+b;
}
// Or

const add =(a, b) => a+b;

// Currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a*b;

// ---> here multiply functions arguments will be passed as the same way
// ---> but in the curriedMultiply function argument it will be passed as the below way
            curriedMultiply(3)(4);              // ---> we have to pass the arguments seperately like this way
            //  and if we only provide one argument like >       curriedMultiply(3);         > it will return the next follwing criterias/function i.e,       (b) => a * b
// and here user arguments can be passed this way > by creating an variable like below
const multiplyBy5 = curriedMultiply(5);

//  functions calling > multiplyBy5(10);               > lie this way the arguments will be passed as 5 * 10 i.e, the values of a * b;



// Compose
// > it is the act of putting two functions tofgether to form a third funtion , where the output of one function is the input of the other function

// ex :
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);                        // explanation : here the third functions calls the first function two times with the input 5 and the the first functions calls the second functions that actually takes two inputs that is accepted by the first function and then the second function calls the first functions two times returning to the second functions and returns 5 + 1 = 6 and then it is again called by the seond function returning 6 + 1 = 7 and then this 7 is returned to the third function and then the third function returns 7 asn the output


// Arrays

// map, filter, reduce

// map } we have to always return something
// filter } this array returns upon some conditions



// extends } whenever we extends a class in another class we need to use super in the calling class constructor(i.e, the second one) with the argumnets that is passed in the parent class constructor (parameters) {



// Coercion } we use double equal value (==) and it is done when we have two differemt types of datatypes and through coercion , javaScript willl convert one datatype variable same as the another outline: 
            //  ex : 1 == '1';        // true
                //  -0 == +0;         // true





// EcmaScript8 (ECMA8)

// .padStart(value) ---> it will add spaces before some text provided and spaces will be according to the value provided in the box
// .padEnd(value) ---> is will add some spaces at the end of the text provided according to the value given

// EcmaScript10 (ECMA10)

// flat ---> it will reduce the array to an single array only to a single level i.e, if it contains more than one array in it, it will only split it upto one level and remaining levels of nesting of the array will be in the same order, if it contains more than one array in it and will flat the array to a single array
// ex >
const arr = [1,2,3,[4,5,6],[8,9,10]]
// ans } [1,2,3,4,5,6,7,8,9,10]

const arr1 = [1,2,3,[4,5,[6,7]],8,9,10]
// ans } [1,2,3,4,5,Array(2),8,9,10]

// int this flat() : we can also pass the value inside the brackets and the flat method will falt the array till that value level


// LOOPS

// for loop
// forEach loop

// for of loop

// for in loop




// FlatMap method

const jurasic = jurasic.flatMap(creatue => creatue + "hello")
//  this will add hello to all the elements present in the jurasic array


// Try Catch Block

try {
    bob + 'hi'
} catch (error) {
    console.log('there is an error handling in this' + error);
}