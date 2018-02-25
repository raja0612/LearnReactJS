import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
   /*  return (
      <div className="App">
        <h1>Hello World from React App...!</h1>  //JSX CODE. 
      </div>
    ); */

    //Equavalent above JSX Code, actually React convert code like below

    return React.createElement('div',{className: 'App'},
       React.createElement('h1',null,'Hello World from React App...!'));
  }
}
export default App;


//This is the root component and it returns the JSX which is mounted to root id index.html
