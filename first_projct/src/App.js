import ReactDOM from 'react-dom';
import './App.css';
import React from 'react';
import logo from './assets/BridgelabzLOGO.PNG'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout.js";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import NoPage from "./Components/NoPage";

class App extends React.Component{
  url= "https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state = {
      userName: " " ,
      nameError: " "
    }
  }
  onClick=($event) =>{
    console.log(" save button is clicked:", $event );
    window.open(this.url, "_blank");
  }
  onNameChange =(event) => {
    console.log(" value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({ userName: event.target.value})
    
    if (nameRegex.test(event.target.value)){
      this.setState({nameError: " "})

    }else{
      this.setState({nameError: " Name is incorrect"})
    }
  }
  render() {
    return ( 
      <>
        <div>
          <h1 className="hello"> Hello  {this.state.userName} From Bridglabz </h1>
          <img src={logo} onClick={this.onClick}
         alt="The Bridglabz logo : a Bridge to Employment through  lab works " />
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>

<div className='Routing'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
      <body>


      <p className="Top">At Bridgelabz, we're a techie community of</p>
        <ul>
            <li>Technologists</li>
            <li>Thinkers</li>
            <li>Builders</li>
        </ul>
        <p>Working together to keep the Tech Employability of Engineers alive and accessiable ,
            so Tech Companies worldwide can get contribution and creators for Technology Solution.
            We believe this act of human collabration across an employability platform is essential
            to individual growth and our collective future.</p>

        <p> To Know about us , visit <a href="https://www.bridgelabz.com">BridgeLabz</a>
            to learn even more about our mission i.e <strong>Employability to all</strong>.
        </p>
    </body>
      </>
    );
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));