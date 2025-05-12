import React from "react";
import { Link } from "react-router-dom";
import { useCartStates } from "../../Context/ContextProvider";

const CartWidget = () => {
   

  const {cantidadItems} = useCartStates()
  return (
    <Link to='/carts'>
      🛒 <span>{cantidadItems}</span>
    </Link>
  );
};

export default CartWidget;
