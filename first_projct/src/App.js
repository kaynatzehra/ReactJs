import React from 'react';
import logo from './BridgelabzLOGO.PNG';


class App extends React.Component{
    url="https:www.bridgelabz.com/"
    constructor(){
        super()
        this.state = {
            title : 'Hello ,from BridgeLabz',
            username : '',
            error:''
        }
    }
    imageclick = () =>{
            window.open(this.url,'_blank');
    }
    namechange = (event) =>{
        this.setState({username : event.target.value})
        const nameregex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if(nameregex.test(event.target.value)){
            this.setState({error : ''})
        }
        else{
            this.setState({error : 'Naming Error'})
        }
    }
    render(){
        return(
            <div>
                
                <h1 style={{"color":"Blue"}}>Hello {this.state.username} from bridgelabz</h1>
                <img src={logo} className="logo" alt='BridgLabz' onClick={this.imageclick}/><br/>
                <input type="text" placeholder='Your Name Here' onChange={this.namechange}/><br/><br/>
                <span className='error'>{this.state.error}</span>
            </div>
        );
    }
}
export default App;