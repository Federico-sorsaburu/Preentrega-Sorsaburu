import React from "react";
import { Button, Card } from "react-bootstrap";
import stylesboton from './Agregar.module.css'
import styles from './Item.module.css'
import Boton from "../Boton/Boton";
import Counter from "./Counter";
import { Link, useNavigate } from "react-router-dom";


const Item = ({ id, title, description, price, image }) => {
 const navigate = useNavigate()
  return (
    
    <div>
 
      <Card style={{ width: "16rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text  className={styles.description}>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Counter/>
          <Boton
          className={stylesboton.bgrBoton}
           
            label="Agregar Producto "
            onClick={() => {
              console.log("PRODUCTO SELECCIONADO :", id);
              useNavigate('/item/' + id)
            }}
          />
         <Link to={'/item/' + id}>Ver Detalle</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
// mostramos los productos desde ItemList
