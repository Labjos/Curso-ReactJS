import logo from './logoBR.png';
import './App.css';
import { NavBar } from './components/NavBar/navBar'
import { Fondo } from './components/fondo/fondo'
import ItemListContainer from './components/itemListContainer/itemListContainer'



function App() {
  
  return (
   
    <div className="App">
      <header className="App-header">
      

    <Fondo/>
      <NavBar />
      <ItemListContainer
       greetings="Pruebame!"
       img="../../imagenes/nero.JPG" />  

        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido a Black#53Red <br/>el SpeackEasy Global !!!</p>
   
    </header>
   </div>
    
    )
}

export default App;
