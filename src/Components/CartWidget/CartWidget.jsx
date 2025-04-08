import React from "react";

const CartWidget = () => {
  const onClick = () => {
    console.log("Apretaste el carrito");
  };

  return (
    <i
      className="bi bi-cart-dash"
      style={{ fontSize: "34px", color: "white", cursor: "pointer" }}
      onClick={onClick}
    ></i>
  );
};

export default CartWidget;