import React from "react";
import { Button, Card } from "react-bootstrap";
import Boton from "../Boton/Boton";

const Item = ({ id, titulo, descripcion, precio }) => {
  return (
    
    <div>
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" src="https://sistemasyprogramas.com/8656-medium_default/pc-solo-cpu-gamer-i5-decima-xpecta.jpg" />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>{precio}</Card.Text>
          <Boton
            type="success"
            label="Agregar "
            onClick={() => {
              console.log("PRODUCTO SELECCIONADO :", id);
            }}
          />
          <Boton type="danger"
           label="Eliminar" 
           
           
           />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
// mostramos los productos desde ItemList
