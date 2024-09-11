import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const tooggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={"container-nav"}>
      {/* logo o el nombre de la empresa  */}
      <h3>Comision-71835</h3>
      {/* al medio un listado de categorias clickeables */}
      <ul>
        {categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
