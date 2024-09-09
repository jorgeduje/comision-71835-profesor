import { useState, useEffect } from "react";
import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
  let precio = 1200;
  let info = "esta informacion";
  const [name, setName] = useState("pepe");
  const [productos, setProductos] = useState(null);
  const handleName = () => {
    if (name === "pepe") {
      setName("pepe");
    } else {
      setName("pepe");
    }
  };

  // useEffect(() => {
  //   console.log("hacemos la peticion"); // una tarea pesasda
  // }, []); // array de dependencias

  useEffect(() => {
    console.log("hacemos la peticion"); // una tarea pesasda
  }, [name]); // array de dependencias

  // productos.map();

  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="nike" precio={precio} />
        <ProductCard titulo="wilson" precio={1000} />
      </div>
      {/* Aca pinto el greeting */}
      <h4>{greeting}</h4>
      <button onClick={handleName}>cambiar nombre</button>
    </div>
  );
};

export default ItemListContainer;
