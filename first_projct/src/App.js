import React from 'react';
import logo from './BridgelabzLOGO.PNG';
import './App.css';


class App extends React.Component{
  url= "https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state = {
      title: 'Welcome, click the logo' 
    }
  }
  onClick=($event) =>{
    console.log(" save button is clicked:", $event );
    window.open(this.url, "_blank")
  }
  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
        alt="The Bridglabz logo : a Bridge to Employment through  lab works " />
      </div>
    );
  }
}
export default App;