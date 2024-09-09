import { useState } from "react";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CounterContainer from "./components/common/counter/CounterContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import PruebaGrid from "./components/common/pruebaGrid/PruebaGrid";

function App() {
  const [montarComponente, setMontarComponente] = useState(false);
  const montarYdesmontar = () => {
    setMontarComponente(!montarComponente);
  };
  const [saludo, setSaludo] = useState("hola");

  const cambiarSaludo = () => {
    if (saludo === "hola") {
      setSaludo("chau");
    } else {
      setSaludo("hola");
    }
  };
  return (
    <div>
      {/* <Navbar />
      {montarComponente ? <ItemListContainer greeting={saludo} /> : null}
      <button onClick={montarYdesmontar}>Montar/desmontar</button>
      <button onClick={cambiarSaludo}>Cambiar saludo</button>
      <CounterContainer />
      <CartContainer /> */}
      <PruebaGrid />
    </div>
  );
}

export default App;
