// import './App.css'

import { useState } from "react";
import { Boton, CartWidget, Header, ItemListContainer } from "./Components";
import { useInput } from "./hooks/useInput";
 
//  import Counter from "./Components/Counter";

function App() {
  // const [name, setName] = useState("");
//  const name = useInput('', 'text')
//  const email = useInput('','email')
//  console.log(name)
//  console.log(email)
  return (
    <>
      {/* <form>
        <label>Nombre:</label>
        <input {...name} />
        <label>Email</label>
        <input {...email}/>
        <button>Enviar</button>

        <h3>NombrE:{name.value}</h3>
        <h3>Correo:{email.value}</h3>
      </form> */}

      <Header />

      {/* <button onClick={() => setToggle(!toggle)}>Pinchar/De</button> */}
     
      <ItemListContainer />
    </>
  );
}

export default App;

// Componente Padre

// const form = document.querySelector('form');
// form.addEventListener('submit', (event) =>{
//   event.preventDefault()

// })
