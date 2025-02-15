import React, { Component } from 'react';
import './App.css';

class Heading extends Component{
  render(){
    return(
      <>
      <h1 id='heading'>This is heading</h1>
      
      </>
    )
  }
}

class Paragraph extends Component{
  render(){
    return(
      <>
      <p id='para'>Lorem hey guys this is my first class component

      </p>
      
      </>
    )
  }
}

function App() {
  return (
    <>
    <Heading/>
    <h2>This is heading</h2>
    <p>Its all about paragraph</p>
    <Paragraph/>
    </>
  );
}

export default App;
