import React from 'react';
import logo from './BridgelabzLOGO.PNG';
import './App.css';


class App extends React.Component{
  url= "https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state = {
      userName:''
    }
  }

  onClick=($event) =>{
    console.log(" save button is clicked:", $event );
    window.open(this.url, "_blank")
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value );
    this.setState ({ userName: event.target.value})

  }

  render(){
    return (
      <>
      <div>
        <h1>Hello {this.state.userName}, from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The Bridglabz logo : a Bridge to Employment through  lab works " />
      </div>
      <div>
        <input onChange={this.onNameChange} />
      </div>
      </>
    );
  }
}
export default App;