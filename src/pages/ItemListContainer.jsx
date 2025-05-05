 
import { useEffect, useState } from "react";
import ItemList from "../Components/ItemlistContainer/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [categoria, setCategoria] = useState("");
  // userRef, useState, useEffect, useContext, useReducer, use

  const [productos, setProductos] = useState([])


  
useEffect(() =>{

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data =>{ 
    console.log(data)
    setProductos(data)
  }).catch((err) => {
    console.log(err)
  })
  
}, [])




 


  return (
    <div> 
      <h1
        style={{
          color: "black",
          fontSize: "3rem",
          width: "100%",
          textAlign: "center",
          fontFamily: " Cochin, Georgia, Times",
          fontStyle: "italic",
        }}
      >
        {greeting}
      </h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;


 