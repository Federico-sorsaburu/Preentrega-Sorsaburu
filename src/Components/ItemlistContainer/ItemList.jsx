// Recibir los productos aca

import React from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
  console.log(productos);

  return (
    <div>
      {productos.map((e) => (
        <Item
          key={e.id}
          image={e.image}
          title={e.title}
          description={e.description}
          price={e.price}
          id={e.id}
        >

          
        </Item>

      ))}
    </div>
  );
};

export default ItemList;
// ItemList depende de ItemListContainer
