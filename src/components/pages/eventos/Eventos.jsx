import { useState } from "react";

const Eventos = () => {
  // onSubmit

  const losTalles = [
    { label: "uno", value: "uno" },
    { label: "dos", value: "dos" },
    { label: "tres", value: "tres" },
    { label: "cuatro", value: "cuatro" },
  ];

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    valueSelect: "",
  });

  const [losAdicionales, setLosAdicionales] = useState([]);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(nuevoProducto);
    console.log(losAdicionales);
  };

  // onChange

  // const capturarNombre = (evento) => {
  //   // console.log(evento.target.name);
  //   setNuevoProducto({ ...nuevoProducto, nombre: evento.target.value }); // {} --> "adsda"
  // };

  // const capturarDescripcion = (e) => {
  //   setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value });
  // };

  const handleChange = (evento) => {
    const { target } = evento;
    const { name, value } = target;

    setNuevoProducto({ ...nuevoProducto, [name]: value });
  };

  // const handleSelect = (evento) => {
  //   console.log(evento.target.value);
  //   setNuevoProducto({ ...nuevoProducto, valueSelect: evento.target.value });
  // };

  const adicionales = (evento) => {
    // console.log(evento.target.value);
    // console.log(evento.target.checked);
    if (evento.target.checked) {
      setLosAdicionales([...losAdicionales, evento.target.value]);
    } else {
      const arrayFiltrado = losAdicionales.filter(
        (adicional) => adicional !== evento.target.value
      );
      setLosAdicionales(arrayFiltrado);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          name="descripcion"
        />

        <select onChange={handleChange} name="valueSelect">
          {losTalles.map((talle) => {
            return (
              <option
                key={talle.label}
                label={talle.label}
                value={talle.value}
              />
            );
          })}
        </select>
        <div style={{ margin: "50px" }}>
          <label>mas cordones</label>
          <input type="checkbox" value="mas cordones" onChange={adicionales} />
          <label>mas plantilla</label>
          <input type="checkbox" value="mas plantilla" onChange={adicionales} />
          <label>extra bacon</label>
          <input type="checkbox" value="extra bacon" onChange={adicionales} />
        </div>

        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};
export default Eventos;
