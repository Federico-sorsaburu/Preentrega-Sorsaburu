import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Counter from '../Components/ItemlistContainer/Counter';
import { useCartStates } from '../Context/ContextProvider';

const ItemDetailContainer = () => {
 
  const [contador, setContador] = useState(0)
  const [productos, setProducto] = useState({})
  const {cart, setCart }  = useCartStates()
const { id } = useParams();

  const url = 'https://fakestoreapi.com/products/' + id

  

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        console.log(data)
      }); 
  }, [])
  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };
 
const addCart = () =>{
  productos.quantity = contador
 setCart([...cart, productos])
 
}
    return (
      <div>
        <img src={productos.image} alt="" width={230} />
        <h2>{productos.title}</h2>
        <p>{productos.description}</p>
        <p>{productos.price}</p>
        <Counter contador={contador} sumar={sumar} restar={restar}/>
        <button disabled={contador   < 1} onClick={addCart}>Agregar al carrito</button>
      </div>
    )
  }
   
 

export default ItemDetailContainer