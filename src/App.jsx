import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="17" ></Device>
      <Device name="Watch" price="3"></Device>
      <Person></Person>
     
      <Student></Student>
      <Developer></Developer>
      
    </>
  )
}

function Device(props){
  console.log(props);
  return <h2>This is Device: {props.name} price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name: 'sakib', age: 12}
  return <h3>I am a {person.name} with age: {age + money}</h3>
}

function Student(){
return (
<div className='student'>
  <h3>This is a Student</h3>
  <p>Name:</p>
  <p>Age:</p>
</div>)
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Dev</h5>
      <p>Coding:</p>
    </div>
  )
}
export default App
