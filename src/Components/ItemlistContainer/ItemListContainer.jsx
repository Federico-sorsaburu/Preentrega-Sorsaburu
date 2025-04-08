import React from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const productos = [
    {
      id: 1,
      titulo: "producto1",
      descripcion: "descripcion 1",
      precio: "100",
    },
    {
      id: 2,
      titulo: "producto2",
      descripcion: "descripcion 2",
      precio: "200",
    },
    {
      id: 3,
      titulo: "producto3",
      descripcion: "descripcion 3",
      precio: "300",
    },
    {
      id: 4,
      titulo: "producto4",
      descripcion: "descripcion 4",
      precio: "400",
    },
    {
      id: 5,
      titulo: "producto5",
      descripcion: "descripcion 5",
      precio: "500",
    },
    {
      id: 6,
      titulo: "producto6",
      descripcion: "descripcion 6",
      precio: "600",
    },
  ];

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
