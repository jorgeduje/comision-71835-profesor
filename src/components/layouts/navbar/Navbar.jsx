import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "container-nav-dark" : "container-nav"}>
      {/* logo o el nombre de la empresa  */}
      <h3>Comision-71835</h3>
      {/* al medio un listado de categorias clickeables */}
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <button onClick={tooggleMode}>cambiar modo</button>
      <CartWidget />
    </div>
  );
};

export default Navbar;
