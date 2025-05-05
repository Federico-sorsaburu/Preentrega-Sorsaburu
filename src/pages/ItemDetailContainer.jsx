import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
 
  const [productos, setProducto] = useState({})
const { id } = useParams();
console.log(id)
  const url = 'https://fakestoreapi.com/products/' + id

  

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        console.log(data)
      });
  }, [])

    return (
      <div>
        <img src={productos.image} alt="" width={230} />
        <h2>{productos.title}</h2>
        <p>{productos.description}</p>
      </div>
    )
  }
   
 

export default ItemDetailContainer