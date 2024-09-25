import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // undefined.title

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      let isLogued = true;
      if (isLogued) {
        res(products);
      } else {
        rej({ message: "algo salio mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log("entro en el catch ", error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;

// const sumar = ( a )=>{
//   let pepe = "dsad"

// }

// console.log( pepe )

// console.log( a )
