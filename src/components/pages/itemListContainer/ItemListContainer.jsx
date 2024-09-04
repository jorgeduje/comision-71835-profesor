import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
  let precio = 1200;
  let info = "esta informacion";
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="nike" precio={precio} />
        <ProductCard titulo="wilson" precio={1000} />
      </div>
      {/* Aca pinto el greeting */}
      <h4>{greeting}</h4>
    </div>
  );
};

export default ItemListContainer;
