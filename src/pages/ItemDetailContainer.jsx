import React, { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import Counter from "../Components/ItemlistContainer/Counter";
import { useCartStates } from "../Context/ContextProvider";
import Loader from "../Components/Loader/Loader";
import NotFound from "../Components/Error/NotFound";
import { getProductById } from "../services/productos";
import '../index.css'
import { getProductsById } from "../services/firebaseServices";

const ItemDetailContainer = () => {
  // const [isLoading, triggerProductos] = useTransition();
  const [contador, setContador] = useState(0);
  const [productos, setProducto] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const { cart, setCart } = useCartStates();
  const { id } = useParams();

 
  useEffect(() => {
  getProductsById (id)
      .then((res) => {
        console.log(res);
        setProducto(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setIsloading(false);
      });
     
  }, []);
  /*
   * @Funtions
   */
  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const addCart = () => {
    productos.quantity = contador;
    setCart([...cart, productos]);
  };

  /*
   * @Components
   */
  // if (isLoading) return <Loader />;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {error && (
        <NotFound
          titulo={`Hubo un problema con un producto buscado ${id}`}
          descripcion="Vuelve a intentarlo mas tarde"
          onClick={getProductById}
        />
      )}
      {!error && (
        <div>
          <img src={productos.image} alt="" width={230} />
          <h2>{productos.title}</h2>
          <p>{productos.description}</p>
          <p>{productos.price}</p>
          <Counter contador={contador} sumar={sumar} restar={restar} />
          <button disabled={contador < 1} onClick={addCart}>
            Agregar al carrito
          </button>
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
