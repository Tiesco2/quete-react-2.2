import React,{Component} from 'react';
import './App.css';
import Contact from'./Components/Contact';





class App extends Component{
  
  render(){
    return ( 
     
          <div className="App"> 
            <Contact name="Myrtle Porter" avatar="https://randomuser.me/api/portraits/women/3.jpg" status />
          
          <Contact name="Louella Simmons" avatar="https://randomuser.me/api/portraits/women/76.jpg" />
        
        <Contact name="Julia Murray" avatar="https://randomuser.me/api/portraits/women/62.jpg" status />
      </div>
    );
  }
}

export default App
