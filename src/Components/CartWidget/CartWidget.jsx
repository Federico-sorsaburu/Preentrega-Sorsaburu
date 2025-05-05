import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const onClick = () => {
    console.log("Apretaste el carrito");
  };

  return (
    <Link to='/carts'>
    
    <i
      className="bi bi-cart-dash"
      style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
      onClick={onClick}
    >
      <span style={{ fontSize: "15px" }}>0</span>
    </i>
    </Link>
  );
};

export default CartWidget;
