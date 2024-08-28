import "./navbar.css";

export const Navbar = () => {
  let nombre = "pepe";
  const saludar = () => {
    console.log("hola " + nombre);
  };

  return (
    <div>
      <h1 className="title">{nombre}</h1>
      <ul>
        <li>todas</li>
        <li>urbanas</li>
        <li>deportivas</li>
      </ul>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};
