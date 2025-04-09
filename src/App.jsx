// import './App.css'

 
import { useState } from "react";
import { Boton, CartWidget, Header,ItemListContainer } from "./Components";
 import Counter from "./Components/Counter";
 

function App() {

// Use
const [count, setCount] = useState(0)

  // Funcion para boton
const Aumentar = () =>{
 setCount(count+1)

}
const Restar = () =>{
  if(count - 1 >= 0)  setCount(count-1)
  
}
// --------------------

  return (
    <>
    <Counter />
    <Header />
    <Boton label={"Aumentar count"}type="success" 
      onClick={Aumentar}
      
      
     />
    < Boton label={"Restar Count"} type="danger"
      onClick={Restar}
    
    /> 
    <h1>hola, toca aca {count}</h1>
   
    <ItemListContainer greeting="Saludo Usuario" />
    </>
  );
}

export default App;


// Componente Padre