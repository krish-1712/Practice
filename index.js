// Copy by value 
// Original variable will not get modified
// actual and copied variable created in different memory location.
// let a=10;
// let b=a;

// b=20;
// console.log(b)

//----------------------------------------------------
// Copy by Reference
// Original variable will  get modified
// actual and copied variable created in same memory location.
// let a=[1,2,3]
// let b=a;

// b[0]=2;

// console.log(a[0])
// console.log(b[0])

//----------------------------------------------------

// JSON PARSE
// This method convert JSON String into javascript value
// Examples:
// const jsonString = '{"name": "Alice", "age": 25, "city": "Wonderland"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
//----------------------------------------------------

// JSON STRINGFY
// This method convert Javascript value into JSON String
// Examples:
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "Wonderland"
//   };

//   const jsonString = JSON.stringify(person);
//   console.log(jsonString);

//----------------------------------------------------

// Javascript:
// Javascript is a versatile,dynamically typed language,high level programming language that is widely used for both 
// client side and server side.
// On th client side , it runs the web browers to create a interactive web page by manipulating the DOM and handling events.
// On the server side , environment like nodejs allow to be used for building fast and scable server application.
// Additionally it has frame works such as react, Angular, Express js.

//----------------------------------------------------

// Normal Function 
// A normal function has an argument object which you can access in the function

// Syntax:
// function functionName(parameters) {
//     // Function body
//     // Code to be executed
//   }

// Examples:
// function greet() {
//   return "Hello, world!";
// }

// console.log(greet()); // Output: "Hello, world!"

//----------------------------------------------------

// Anonymous function

// It is a function that does not have any name associated with it 

// Syntax:
// let variableName = function(parameters) {
//     // function body
// };

// Examples:
// let greet = function(name) {
//     return `Hello, ${name}!`;
// };

// console.log(greet("Alice")); // Output: Hello, Alice!

//----------------------------------------------------

// IIFE (Immediately Invoked Function Expression)

// An (IIFE) is a self contained function that is defined and excuted immediately and often use to encapsulate variables 
// and create a private scope .

// Syntax:

// Without Parameter

// (function() {
//     // function body
// })();

// With Parameter

// (function(parameter1, parameter2) {
//     // function body
// })(argument1, argument2);

// Examples:
// (function() {
//     console.log("This is an IIFE.");
// })();

// (function(name) {
//     console.log(`Hello, ${name}!`);
// })("Alice");

//----------------------------------------------------


// Arrow Functions 

// Arrow functions is a new way to write a anonymous function expressions . Mostly Used, Latest Version in ES6

// Syntax:

// let rest=(num1,num2) =>{

// }

// Examples:

// const greet = (name) => {
//     console.log(`Hello ${name}`);
// };

// greet("krish"); // Output: Hello krish


//----------------------------------------------------

// Var : we can redeclare and reassign mutiple Times

// Let : we can reassign values but we cannot redecalre

// Const : we cannot do both redelcare and reassign


//----------------------------------------------------

// ForEach 

// forEach()  is an iterative method. It takes a callback function as an argument, which is executed once,
// for each element in the array. 
// Three parameters: the current element, the index of the current element, and the array itself.

// Syntax:

// array.forEach((currentValue, index) => {
//     // Your code here
// });

// Examples:
// let numberss = [1, 2, 3, 4, 5];

// numberss.forEach((number, index,) => {
//     numberss[index] = number * 2; 
// });

// console.log(numbers); // Output: [2, 4, 6, 8, 10]

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number, index,array) => {
//     array[index] = number * 2; 
// });

// console.log(numbers); // Output: [2, 4, 6, 8, 10]


//----------------------------------------------------

// Concatenation

// String Concatenation in javascript means appending one or more strings to the end of another String 

// Examples:

// let result = "a:20" + " and " + "b:30" + " and " + "sum:50";
// console.log(result); // Output: a:20 and b:30 and sum:50


//----------------------------------------------------

// Template Literals 

// Template Literals are introduced in ES6. it provide an easy way to create Multiline Strings
// and perfrom String Interpolations

// Examples:

// let name = 'Alice';
// let age = 30;
// let greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// console.log(greeting);

//----------------------------------------------------

// Object Shorthand 

// The shorthand syntax for object value is very popular and widely used 
// It helps in keeping the code neat,clean and easy to write
// It reduces code size making it simpler and more efficient


// Examples 

// let name = "Alice";
// let age = 30;

// Without Shorthand 
// let person = {
//     name: name,
//     age: age
// };

// console.log(person); // Output: { name: 'Alice', age: 30 }


// With shorthand 
// let person ={
//     name,
//     age
// }

// console.log(person); // Output: { name: 'Alice', age: 30 }

//----------------------------------------------------

// Spread Operator 

// The Spread oprator is denoted by three dots (...)
// It is introduced in ES6
// It is used to Spread Elements in array, objects and function calls
// It enables flexible data manipulation and function arguments

// Examples

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = [...array1, ...array2];

// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

//----------------------------------------------------

//Rest Parameter

// The Rest Parameter is denoted by Three dots (...)
// It allow a function to accept unlimited number of arguments 
// It provide flexibility by accommodating any number of arguments dynamically
// By using rest paramter you write a more flexible and dynamic code

// Examples
// function sum(...numbers) {
//     return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6

//----------------------------------------------------

// Destructing 

// Destructing allow you to extract values from array and object

// Array destructing:
// use square [] bracket to destructure an array
// The order of variable correspond to order of values

// Examples

// let numbers=[1,2,3]
// let [first,second,third] =numbers

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(third); // Output: 3

// Object Destructing
// use Curly {} Braces to destructure an object
// The variables names should match the property of names

// Examples
 
// let person={name:'krish',age:20}
// let {name,age}=person

// console.log(name); // Output: Alice
// console.log(age); // Output: 30

//----------------------------------------------------


//OOP (Object oriented Programming)

// A class in object oriented programming is a blueprint or template for creating a object with defined 
// attribute and behaviour

// 'This' is a standard keyword used inside the constructor

// 'New' is a keyword used to create a new instance of a class

// Class can have constructor method to initialize new instance, but it not mandatory

// Single object want to runs means we can use Getter and Setter Method

// list of object want to runs means we can use static method 


// // Define a class
// class Animal {
//     // Constructor method to initialize the object's attributes
//     constructor(name) {
//         this.name = name;
//     }

//     // Method to return a greeting
//     greet() {
//         return `Hello, my name is ${this.name}.`;
//     }
// }

// // Create an object using the class
// let myPet = new Animal('Buddy');

// // Access the object's attributes and methods
// console.log(myPet.greet()); // Output: Hello, my name is Buddy.


//----------------------------------------------------

// Map

// Examples:

// let users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// let name =users.map((number)=>number.name)
// console.log(name);  // Output: ['Alice', 'Bob', 'Charlie']

// let age =users.map((number)=>number.age)
// console.log(age);  // Output: [25, 30, 35]


// let users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// // Using map to create a new array of objects with both name and age
// let userInfo = users.map(user => ({ name: user.name, age: user.age }));

// console.log(userInfo);


//----------------------------------------------------


// Filter

// Examples:
// let numbers = [1, 2, 3, 4, 5, 6];

// let even= numbers.filter((user)=>{
//     return user%2==0
// })
// console.log(even);

// let users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// let ages = users.filter((number)=>{
//     return number.age>30
// })

// console.log(ages);

//----------------------------------------------------


//Reduce

//Examples:
// let numbers = [1, 2, 3, 4, 5];

// let total=numbers.reduce((currentValue,acc)=>{
//     return currentValue +acc
// },0)

// console.log(total)


// let users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// let userobject=users.reduce((current,acc)=>{
//     current[acc.name]=acc.age
//     return current
// })

// console.log(userobject)

//----------------------------------------------------

// SetTimeout:

// It will excecute only once 
// It is the function what we nee to excute
// It need some delay time 

// Syntax :
// settimeout(function name,delay time)
// function function name(){

// }

// Examples:
// setTimeout(function() {
//     console.log('This message appears after 3 seconds');
// }, 3000);

// ClearTimeout
// cleartimeout() methods cancel a timeout previously established by calling setTimeout() 

// Examples
// let timeoutId = setTimeout(function() {
//     console.log('This message will not appear');
// }, 3000);

// // Clear the timeout before it executes
// clearTimeout(timeoutId);

//----------------------------------------------------

// SetInterval 
// It excecutes again and again at specific time 

// Syntax:
// Syntax :
// setinterval(function name,delay time)
// function function name(){

// }

// Examples:
// let intervalId = setInterval(function() {
//     console.log('This message appears every 2 seconds');
// }, 2000);

// ClearInterval:
// clearinterval function in javascript is used to stop the event of the recurring calling of a function 
// at a fixed delay set by the setInterval function

// Examples:
// Start an interval that logs a message every second
// let intervalId = setInterval(function() {
//     console.log('This message appears every second');
// }, 1000);

// // After 5 seconds, clear the interval
// setTimeout(function() {
//     clearInterval(intervalId);
//     console.log('Interval cleared');
// }, 5000);

//----------------------------------------------------

// CallBack Function 
// callback are function passed as an argument to other function and are excecuted when that function complete it task 

// Examples:
// function greet(name, callback) {
//     console.log('Hello, ' + name);
//     callback();
// }

// function sayGoodbye() {
//     console.log('Goodbye!');
// }

// greet('Alice', sayGoodbye);

// Disadvantages of callback hell
// function inside the function, more tha n function that are excecuted in the same program 
// and js got stucked and throws an errow
// so callback hell is not suitable for webapi to retrieve the data

// Examples:

// // Simulate async tasks with setTimeout
// function firstTask(callback) {
//     setTimeout(() => {
//         console.log('First task completed');
//         callback();
//     }, 1000);
// }

// function secondTask(callback) {
//     setTimeout(() => {
//         console.log('Second task completed');
//         callback();
//     }, 1000);
// }

// function thirdTask(callback) {
//     setTimeout(() => {
//         console.log('Third task completed');
//         callback();
//     }, 1000);
// }

// // Nested callbacks leading to callback hell
// firstTask(() => {
//     secondTask(() => {
//         thirdTask(() => {
//             console.log('All tasks completed');
//         });
//     });
// });


// 1. call stack
// 2. webapi
// 3. callback queue
// 4. event loop

// 1. Call Stack:
// It is the place in the browser where it keeps all the track of code 
// It will excecute whatever the statement inside it 
// If there is any call back function it will send it to webapi

// 2. WebApi:
// It is the place where async or call back function are acutally excecuted 
// It recevies the call back function from call stack
// It will run the call  back function and send it to call back queue

// 3. Callback Queue
// It stores the async or call back function which comes from webapi
// It decide which comes first and then only it will excexute

// 4.Event Loop:
// It coordination between call stack and call back Queue
// It will check whelther the call stack is empty or not
// If it is empty it will push the function in call stack
// it will excecute asynchronous code , non blocking I/O model, efficiently handling.

//----------------------------------------------------

// Promise

// Promise is the one of the method to handle async functions
// promise always return a object
// Promise has 2 paramter
// 1. resolve
// 2. reject
// Promise has 3 states
// 1.Pending=> Pending unless or untill the async operation in process
// 2.fullfilled=> we will get the value , to handle error we can use .then()
// 3.rejected=> we will get an error, to handle erroe we can use .catch()
// Promise can either be fullfilled or rejected , both will not happen at same time

// Examples

// let promise= new Promise((resolve, reject) => {
//     let success=false;
//     if(success){
//         resolve("the operation was successful")
//     }else{
//         reject("the operation was failed")
//     }
// })


// promise.then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })

//----------------------------------------------------

// Fetch

// fetch is an alternative for XML HTTP request
// fetch always return a object and also retrun a promise
// Inside the promise the data which we are having readable stream
// so, that we want to change this format into JSON
// to handle and to get output in fetch() , we can use .then() and .then()

// Examples

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json()) // Parsing the response as JSON
//     .then(data => console.log(data))   // Output the data to the console
//     .catch(error => console.error('Error:', error)); // Handling any errors

//----------------------------------------------------

// Axios

// Axios is a javascript library used to make HTTP request from both node js and ultilizing XMLHTTP request in the browser

//Examples:

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         console.log(response.data); // Output the data to the console
//     })
//     .catch(error => {
//         console.error('Error:', error); // Handling any errors
//     });

//----------------------------------------------------

// Async Await

// Async Await is an advanced feature in JavaScript for handling asynchronous operations, 
//including retrieving data from web APIs.
// It both works together
// Async always return a promise
// when use await along with async we can get the output easily
// To handle error in async await we can use try catch 

// Examples:
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Call the function
// fetchData();

//----------------------------------------------------

// Hoisting

// Hoisting is default behaviour of javascrpit
// where variable declaration and function declaration are moved to the top of their scope
// javascript excecutes code in 2 phases
// 1. creation or memory allocation
// 2. excecution phase
// hoisting will happen in creation pahse



// all the three varaiables var,let,const get hoisted ,but there is a difference in hoisting
// var will get hoisted and initalized with undefined 
// let const get hoisted but will not get initalized. so accesing the variable before actual initialization, will result in 
// reference error. this reference error happening because these variables are in temporal dead zone untill the actual 
//initalization 


//----------------------------------------------------

// synchronus or blocking model:
// excecute line by line eg: let a=10; =>first let b=12=>second

// asynchronous or non blocking model:
// multiple operations excecuted at same time 

//----------------------------------------------------


// Usestate
// 1) UseState is a hook that adds state to functional components in react.
// 2) It allow you to declare state varaiables and their initial values.
// 3) It return an array with two elements. 1) The current state value and a function to update the state.
// 4) const[count, setcount]= useState(0), where "count" is the state variable, "set count" is the function to update it.
// 5) when using normal variable in react and updating it will not cause re render and so we cannot see the changes in UI.
// 6) To avoid this problem, react provides UseState Hook. This gives a state varaible and when updating it using SetState 
//    function, it causes re-renders and changes are visible on UI.
// 7) So usestate and state variables are important for state management in react.



// Examples:
// function App() {
//     const[value, setValue] = useState(0);
//     console.log(value);
  
//     const handleClick = ()=>{
//       setValue(value+1)
//     }
  
//     return (
//       <>
//         <h2>VALUE:{value}</h2>
//         <button onClick={handleClick}>Click</button>
//       </>
//     )
//   }


// function App() {
//     const[value, setValue] = useState(true);
//     // console.log(val);
  
//     const handleClick = ()=>{
//       setValue((pre)=> !pre)
//     }
  
//     return (
//       <>
//         <h2>VALUE:{value}</h2>
//         <button style={{backgroundColor: value?"white":"red"}} onClick={handleClick}>Click</button>
//       </>
//     )
//   }

//----------------------------------------------------

// UseEffect:
// 1) UseEffects is a hook that handles side effects in react functional components.
// 2) Side Effects including Tasks like data fetching, modifying the DOM.
// 3) It accepts a callback functions as the first parameter.
// 4) You can Provide a Dependency array as the second Parameter.
// 5) SideEffects are effects which are out of control of react like directly modifying the DOM.
// 6) For same input conditions, the output may be changing and unexpected.
// 7) Examples: when fetching data, but the second time some error may happen.

//Examples:
// import React, { useState, useEffect } from 'react';

// const FetchDataComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // This function will run when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } 
//     };

//     fetchData();
//   }, []); // Empty dependency array means this effect runs once on mount

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FetchDataComponent;

//----------------------------------------------------

// Dependency Array 
// there are three case for Dependency Array 
// 1. there is no Dependency Array , the useeffect effect runs after every render.
// 2. there is Empty Dependency Array , the useeffect runs only once, after the initial render.
// 3. there is Dependency array, the useeffect,runs after the initial render and then only when one of the dependencies has changed.    

//----------------------------------------------------


// UseRef
// 1) UseRef is a hook provided by react that allows you to create reference to a value.
// 2) When you UseRef it return a object a "Current" Property.
// 3) UseRef is commonly used to persist values that need to be accessed or updated, but it cannot re-render, 
//    we cannot see the updates values in UI.
// 4) UseRef can be use to access and Mainpulate DOM Elements.
// 5) UseRef can also used to store Mutable values within a components.


//Examples:
// function App() {

//     const val = useRef(0)
  
//     return(
//       <>
//       <h1>count:{val.current}</h1>
//       <button onClick={()=> {
//         val.current = val.current+1
//         console.log(val.current);
//       }}>Click</button>
//       </>
//     )
//   }

//----------------------------------------------------


// UseReducer
// 1) UseReducer is a hook provided by react for managing complex state logic.
// 2) UseReducer is a alternate to UseState when you have more complex state requirements.
// 3) UseReducer takes reducer function and initial state.
// 4) Action are object that describe what kind of state change should occur.
// 5) By using UseReducer you can ensure immutability and have more state updates and reducing bug. 

// Examples:
// import React, { useReducer } from 'react';

// function reducer(state, action) {
//     console.log(state)
//     console.log(action)
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

//----------------------------------------------------


// Context API:
// 1) Context API is a built-in feature in react that allows you to share the data across components without passing Props.
// 2) It enables you to create centralized state or data store that can be accessed by any components.
// 3) Context API consist of two types 1) provider 2) consumer
// 4) Provider: The provider components is used to wrap the components that need across the shared data.
// 5) Consumer: The consumer components is used within the wrapped components to access the shared data.
// 6) The share data can be updated by using function or method provided by the context.
// 7) Context API helps to avoid prop drilling.

// Examples in GitHub 

//----------------------------------------------------