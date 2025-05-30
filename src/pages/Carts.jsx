import React from "react";
import { useCartStates } from "../Context/ContextProvider";
import NotFound from "../Components/Error/NotFound";
import { useNavigate } from "react-router-dom";
import Check from "./Check"
const Carts = () => {
  const { cart, total, setCart } = useCartStates();
  const navigate = useNavigate();

  const irHome = () => {
    navigate('../');
  };
  const eliminarProducto = (id) => {
    setCart(cart.filter((e) => e.id !== id));
  };
  if (!cart.length) {
    return (
      <NotFound
        titulo={"No hay Elementos Agregados"}
        descripcion={"Te falta agregar Item al carrito de compras"}
        onClick={irHome}
        label={"ir a home"}
      />
    );
  }
   
  return (
    <div>
      <h1>Mi carrito de compras</h1>
      {cart.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <img src={prod.image} alt="" width={80} />
          <h4>${prod.price}</h4>
          <h4>Cantidad: {prod.quantity}</h4>
          <h2>Subtotal:${prod.price * prod.quantity}</h2>
          <button
            onClick={() => {
              eliminarProducto(prod.id);
            }}
          >
            Eliminar
          </button>
        </div>
        
      ))}
      <h1>Precio Final: ${total} </h1>
        <Check/>  
    </div>
   
  );
};

export default Carts;
