import React from 'react';
import ReactDOM from 'react-dom/client';
import {name, age} from './person.js';
import message from './message.js';
import Boat from './Boat.js';

const myFirstElement = <h1>Hello React!</h1>;
const mySecondElement = <h2>Hello ReactJS!</h2>;
// ReactDOM.render(<p>This is a paragraph by ReactDOM.render().</p>, document.getElementById('root'));
// JSX
const element = (
  <table border='1'>
    <thead>
    <tr>
      <th>Name</th>
      <th>Profession</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Jake</td>
      <td>Actor</td>
    </tr>
    <tr>
      <td>Dana</td>
      <td>Singer</td>
    </tr>
    <tr>
      <td>Jessica</td>
      <td>Model</td>
    </tr>
    </tbody>
  </table>
);

const elementNoJsx = React.createElement('p', {},"This is a paragraph no JSX.");

const expression = <h2>React is {5 + 5} times better with JSX!</h2>;

const list = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
    <li>Coconuts</li>
    <li>Avocados</li>
  </ul>
);

const topLevelEl = (
  <div>
    <p>First paragraph.</p>
    <p>Second paragraph.</p>
  </div>
);

const fragment = (
  <>
    <p>First paragraph!</p>
    <p>Second paragraph!</p>
  </>
);

const closedEl = <input type='text' className='bg-red' value='Some text..' />;

const myNum = 5;
let text = 'Hello';

if (myNum > 44) {
  text = 'Goodbye';
}

const sayGoodbye = <h2>{(myNum < 10) ? 'Goodbye!' : 'Hello'}</h2>;

//React components
function Plane(props) {
  return <p>Hi, I am a {props.feature.type} plane {props.feature.brand}.</p>;
}

function Garage() {
  const planeFeature = {
    type: "defender",
    brand: "МиГ-35"
  };
  const boatFeature = {
    type: "motor",
    color: "white"
  };
  const myPlane = <Plane feature={planeFeature} />;
  const myBoat = <Boat feature={boatFeature} />;
  return (
    <>
      <p><b>Who is in my garage?</b></p>
      {myPlane}
      {myBoat}
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);





// This works with 'react-dom' only!
// const container = document.getElementById('root');
// ReactDOM.render(element, container);


//ES6 Overview
class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return 'My car is ' + this.brand;
  }
}

class Model extends Car {
  constructor(carName, mod) {
      super(carName);
      this.model = mod;
  }
  show() {
    return this.present() + ' and it is ' + this.model;
  }
}

let mycar = new Car('Ford');
console.log(mycar.brand);
console.log(mycar.present());

let mycarModel = new Model('Ford', 'Mustang');
console.log(mycarModel.show());

//arrow functions
let gpu = model => 'GPU: ' + model;
console.log(gpu('Geforce GTX 1650 4GB'));


class Header {
  constructor() {
    this.color = "Red";
    this.number = 'PB 1234 BP';
  }

  // With a regular function, this represents the object that called the function:
  changeColor = function() {
    console.log(this);
  }

  // With an arrow function, this represents the Header class NO matter who called the function:
  changeNumber = () => console.log(this); // Header Object {...}

}


const myheader = new Header();
// The window object calls the function:
window.addEventListener('load', myheader.changeColor); // logs the 'window' object..
window.addEventListener('load', myheader.changeNumber); // Logs the Header class

// The document object calls the function:
document.addEventListener('click', myheader.changeColor); // Logs the #document object.
document.addEventListener('click', myheader.changeNumber); // Logs the Header class

// es6 variables
if (true) {
  var a = 1; // global scope because of if() {} block
}
console.log(a); // 1

function num() {
  var number = 2;
}
num();
// console.log(number); // Error.. because of function scope only and not block.

if (true) {
  let b = 2;
}
// console.log(b); // Error.. because of block scope.

if (true) {
  const c = 4;
  // c = 5; -> TypeError: Assignment to constant variable.
}
// console.log(c); // Error.. because of block scope.

//ES6 array methods .map()
const myArray = ['Banana', 'Orange', 'Apple'];
let myList = myArray.map((item) => {
  console.log(item.toUpperCase());
});

//es6 destructuring
const vehicles = ['mustang', 'f-150', 'expedition'];
const [car,, suv] = vehicles;
console.log([car,, suv]);
let calculate = (a, b) => {
  let add = a + b;
  let substract = a - b;
  let multiply = a * b;
  let devide = a / b;
  return [add, substract, multiply, devide];
}
let [add, substract, multiply, devide] = calculate(2, 8);
console.log('Sum = ' + add + '. Difference = ' + substract + '. Product = ' + multiply + '. Quotient = ' + devide);

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2022,
  color: 'lightblue',
  registeration: {
    city: 'Washington',
    state: 'Washington',
    country: 'USA'
  }
}

let myVehicle = ({brand, type, registeration:{state}, year, model, color}) => {
  //const message = 'My ' + vehicle.type + ' is ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '. It\'s manufactured ' + vehicle.year + '.';
  const message = 'My ' + type + ' is ' + color + ' ' + brand + ' ' + model + '. It\'s manufactured ' + year + '. The ' + type + ' is registered in ' + state + '.';
  console.log(message);
}

myVehicle(vehicleOne);

// ES6 modules
// import statement is on top of code..
console.log(`My name is ${name}. I am ${age}.`);
console.log(message());

// ES6 Ternary Operator
let ternaryNum = 7;
ternaryNum >= 18 ? console.log('Old enough.') : console.log('Too young!');;

// ES6 Spread Operator
let myNumbers1 = [1,2,3,4];
let myNumbers2 = [5,6,7,8,9,10];
let numbersCombined = [...myNumbers1, ...myNumbers2];
console.log(numbersCombined);

let myNumbers3 = [1,2,3,4,5,6,7,8];
const [one, two, three, ...rest] = myNumbers3;
console.log(one, two, three,rest);

const myVehicle1 = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateVehicle = {
  type: 'car',
  year: '2023',
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle1,...updateVehicle}
console.log(`The color of my updated vehicle is now ${myUpdatedVehicle.color}.`);
