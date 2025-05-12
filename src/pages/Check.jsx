import React, { useState } from "react";
import { validatePassword } from "../helpers/validation";

const Check = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [user, setUser] = useState({
    name: "",
    email: "",
    tel: "",
  });
 const handleChange = event => {
  console.log(event)
  setUser({...user,[event.target.name]:  event.target.value })
}
const handleSubmit = e =>{
e.preventDefault()
 
// validaciones de EMAIL

const regexr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
 if(validatePassword(user.name) && regexr.test(user.email)){
  alert ('Pedido cargado. procesando informacion')
  //envio a firebase
 }else{
  alert('Campos invalidos')
 }
}
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label>Telefono</label>
        <input
          type="number"
          name="tel"
          value={user.tel}
          onChange={handleChange}
        />

        <button>Finalizar compra</button>
      </form>
      <h3>Nombre:{user.name}</h3>
      <h3>Email:{user.email}</h3>
      <h3>Telefono:{user.tel}</h3>
    </div>
  );
};

export default Check;
