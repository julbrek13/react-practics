import logo from './logo.svg';
import './App.css';
//cuando queremos importar componentes que no se exportan defaults debemos usar las llaves 
//primero el default y luego el normal                                 
import HolaMundo, { AdiosMundo } from "./components/HolaMundo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <HolaMundo />
      <AdiosMundo />
      </header>
    </div>
  );
}

export default App;
