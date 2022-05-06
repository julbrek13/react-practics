import React from "react";
import logo from './logo.svg';
import './App.css';
//cuando queremos importar componentes que no se exportan defaults debemos usar las llaves 
//los dos son default ahora.                              
import Saludar from "./components/Saludar";


function App() {
  const user= {
        nombre: "pedro antonello",
        edad: 76,
        color: "Azul"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
      <Saludar userInfo={user}/>

     
      
      </header>
    </div>
  );
}

export default App;
