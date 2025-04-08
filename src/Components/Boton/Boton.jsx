import React from "react";
import { Button } from "react-bootstrap";

const Boton = ({label, type, onClick, ...rest}) => {
   
  return <Button variant={type} onClick={onClick} {...rest} > 
 
  {label}</Button>
};

export default Boton;

 // Componente hijo