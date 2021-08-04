import logo from './logoBR.png';
import './App.css';
import {NavBar } from './components/navBar.jsx'

function App() {
  
  return (
   
    <div className="App">
      <header className="App-header">

      <NavBar />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido a Black#53Red el SpeackEasy Global !!!</p>
        
      </header>
    </div>)
  }

export default App;
