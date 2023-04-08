import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, route, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { useState } from 'react';
import {name, age} from './person.js';
import message from './message.js';
import Boat from './Boat.js';
import Motor from './Motor.js';
import Sportcar from './Sportcar.js';

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

//React components and props, react lists
function Plane(props) {
  return <p>Hi, I am a {props.feature.type} plane {props.feature.brand}.</p>;
}

function Vehicle(props) {
  return <b>I am a {props.type}</b>;
}

function Garage() {
  const planeFeature = {
    brand: "МиГ-35",
    type: "defender"
  }
  const boatFeature = {
    type: "motor",
    color: "white"
  }
  const motorFeature = {
    brand: "Ducati",
    color: "blue"
  }
  const sportcarFeature = {
    brand: "Ferrari",
    model: "GTB 488"
  }
  const vehicleType = [
    {id: 1, type: 'tank'},
    {id: 2, type: 'drone'},
    {id: 3, type: 'yacht'},
    {id: 4, type: 'private jet'}
  ];
  return (
    <>
      <h1><b>Who is in my garage?</b></h1>
      <ul>
        {vehicleType.map((item) => <li key={item.id}><Vehicle type={item.type} /></li>)}
      </ul>
      <Plane feature={planeFeature} />
      <Boat feature={boatFeature} />
      <Motor feature={motorFeature} />
      <Sportcar feature={sportcarFeature} />
    </>
  );
}

//React events
const InvestMarket = () => {
  const buyBTC = () => {
    alert('Congrats. You just have bought some Bitcoins.');
  }
  const buyXMR = (msg) => {
    alert(msg);
  }
  const buyMSFT = (msg, e) => {
    alert(msg);
    alert("Event: " + e.type);
  }
  return (
    <>
      <button onClick={buyBTC}>Buy BTC</button>
      <br />
      <br />
      <button onClick={() => buyXMR("Congrats. You just have bought some Monero.")}>Buy XMR</button>
      <br />
      <br />
      <button onMouseOver={(event) => buyMSFT("Congrats. You just have bought some MSFT stocks.", event)}>Buy MSFT</button>
    </>
  );
}

//React Conditionals
function ConnectionEstablished() {
  return <p>Connected!</p>
}
function ConnectionFailed() {
  return <p>Connection failed.</p>
}

function Connection(props) {
  const isConnected = props.isConnected
  // regular if() statement
  // if (isConnected) {
  //   return <ConnectionEstablished />
  // } else {
  //   return <ConnectionFailed />
  // }
  return (
    <>
      {(isConnected) ? <ConnectionEstablished /> : <ConnectionFailed />}
    </>
  );
}

function CryptoCollection(props) {
  const myCollection = props.collection;
  return (
    <>
      <h1>Crypto Collection</h1>
      {myCollection.length > 0 && <h2>My crypto collection consist of {myCollection.length} types cryptocurrency.</h2>}
    </>
  );

}
const collection = ['Bitcoin', 'Monero', 'Solana', 'Litecoin'];

//React Forms
function MyForm() {
  //const [username, setUsername] = useState("");
  //const [textarea, setTextarea] = useState("The content of a textarea goes in the value attribute");
  //const [currency, setCurrency] = useState("SOL");
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`The username is ${inputs.username}`);
    console.log(`The email is ${inputs.email}`);
    console.log(`The message is: ${inputs.message}`);
    console.log(`The currency is ${inputs.currency}`);
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your username:</label><br />
      <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} /><br /><br />
      <label>Enter your email:</label><br />
      <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} /><br />< br/>
      <label>Enter your message:</label><br />
      <textarea value={inputs.message} name="message" onChange={handleChange}></textarea><br /><br />
      <label>Select your currency:</label><br />
      <select value={inputs.currency} name="currency" onChange={handleChange}>
        <option>Select currency..</option>
        <option value="BTC">Bitcoin</option>
        <option value="XMR">Monero</option>
        <option value="ADA">Cardano</option>
        <option value="SOL">Solana</option>
      </select>
      <br /><br />
      <input type="submit" />
      <p>Your username is: {inputs.username}</p>
      <p>Your email is: {inputs.email}</p>
      <p>Your message is: {inputs.message}</p>
      <p>Your currency is: {inputs.currency}</p>
    </form>
  );
}

//React Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//This comment line is from html-skeleton branch by Github.
//This line is from html-skeleton branch on Git Pull Branch from Github tutorial.
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<CryptoCollection collection={collection} />);
root.render(<App />);





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
