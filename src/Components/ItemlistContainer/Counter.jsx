import React, {  useEffect, useState } from "react";
import { useCount } from "../../hooks/useCounts";
import styles from './Item.module.css'
const Counter = () => {
  
  const [contador, setContador] = useState(0);

  // const sumar = () => {
  //   setContador(contador + 1);
  // };

  // const restar = () => {
  //   setContador(contador - 1);
  // };
  // console.log(contador);

 const {count, restar, sumar, reset} = useCount (1,0,10)
  
  return (
    <div  className={styles.btnGrp}>
      <button onClick={restar}>-</button>
      <h3>{count}</h3>
      <button onClick={sumar}>+</button>
    </div>
  );
};

export default Counter;
