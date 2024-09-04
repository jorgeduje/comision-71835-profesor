import "./productCard.css";

const ProductCard = ({ titulo, precio }) => {
  return (
    <div>
      <h2>{titulo}</h2>
      <h3>{precio}</h3>
      <button>ver detalle</button>
    </div>
  );
};

export default ProductCard;

// const pepe = ({ a, b, c }) => {};

// pepe({ a: 2, b: 3, c: 4 });
