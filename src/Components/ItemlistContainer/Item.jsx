import React from "react";
import { Button, Card } from "react-bootstrap";
import Boton from "../Boton/Boton";
import Counter from "../Counter";

const Item = ({ id, title, description, price, image }) => {
  return (
    
    <div>
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Boton
            type="success"
            label="Agregar "
            onClick={() => {
              console.log("PRODUCTO SELECCIONADO :", id);
            }}
          />
         
      {/* <Counter/> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
// mostramos los productos desde ItemList
