import "./navbar.css";
// import logo from "../../assets/logozapatillas.jpg";

export const Navbar = () => {
  let nombre = "pepe";
  const saludar = () => {
    console.log("hola " + nombre);
  };

  return (
    <div>
      {/* <img src={logo} alt="" /> */}
      {/* <img src="/public/logozapatillas.jpg" alt="" /> */}
      {/* <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1725317557/Captura_de_pantalla_2023-11-20_212658_dq1xho.png"
        alt=""
      /> */}
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
