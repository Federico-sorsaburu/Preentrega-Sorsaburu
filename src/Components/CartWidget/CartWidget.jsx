import React from "react";

const CartWidget = () => {
  const onClick = () => {
    console.log("Apretaste el carrito");
  };

  return (
    <i
      className="bi bi-cart-dash"
      style={{ fontSize: "20px", color: "red", cursor: "pointer" }}
      onClick={onClick}
    ><span style={{fontSize: "15px"}}>0</span></i>
  );
};

export default CartWidget;