import CajaPadre from "../../common/CajaPadre";
import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
      {/* <CajaPadre>
        <h4>primer elemento</h4>
        <h4>segundo elemento</h4>
        <h4>tercer elemento</h4>
        <button>sumar</button>
      </CajaPadre>
      <CajaPadre>
        <h5>Hola</h5>
      </CajaPadre> */}
    </div>
  );
};

export default ItemList;
