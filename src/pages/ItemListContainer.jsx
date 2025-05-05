import { useEffect, useState } from "react";
import ItemList from "../Components/ItemlistContainer/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  // userRef, useState, useEffect, useContext, useReducer, use

  const [productos, setProductos] = useState([]);
  console.log(productos);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProductos(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // Filtrar por categoria
  const filteredList = category
    ? productos.filter(prod => prod.category.includes(category))
    : productos;
  console.log("filteredList", filteredList);
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
      <ItemList productos={filteredList} />
    </div>
  );
};

export default ItemListContainer;
