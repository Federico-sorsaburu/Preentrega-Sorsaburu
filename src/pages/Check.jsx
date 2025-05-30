import React, { useState } from "react";
import { validatePassword } from "../helpers/validation";
import { useCartStates } from "../Context/ContextProvider";
 
import { useNavigate } from "react-router-dom";
import { createOrder, createOrderAndUpdateStock } from "../services/firebaseServices";

const Check = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  const [user, setUser] = useState({
    name: "",
    email: "",
    tel: "",
  });
  const {cart, total, setCart } = useCartStates()
  const navigate = useNavigate()
 const handleChange =   event => {
  const {name, value} = event.target
 
  setUser({...user, [name]: value})
}
const handleSubmit = async  e =>{
e.preventDefault()
 
// validaciones de EMAIL

const regexr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  
 if(!validatePassword(user.name) && !regexr.test(user.email)){
  alert ('campos invalidos')
  return
 }
  const newOrder = {
   buyer: user,
   items: cart,
   total: total
  }
 const res = await createOrderAndUpdateStock(newOrder)
 alert('Compra confirmada. tu Id de compra es '+ res.id)
 setCart([])
 navigate('./')
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
