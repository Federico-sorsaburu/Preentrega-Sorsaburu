// import './App.css'

 
import { useState } from "react";
import { Boton, CartWidget, Header,ItemListContainer } from "./Components";
 
 

function App() {

// Use
const [count, setCount] = useState(0)

  // Funcion para boton
const Aumentar = () =>{
 setCount(count+1)

}
const Restar = () =>{
  if(count - 1 == 0)  setCount(count-1)
  
}
// --------------------

  return (
    <>
    <Header />
    <Boton label={"Aumentar count"}type="success" 
      onClick={Aumentar}
      
      
     />
    < Boton label={"Restar Count"} type="danger"
      onClick={Restar}
    
    /> 
    
   
    <ItemListContainer greeting="Saludo Usuario" />
    </>
  );
}

export default App;


// Componente Padre