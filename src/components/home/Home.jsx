import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Home = () => {
  return (
    <div>
      <Button variant="contained" color="primary" disabled={true}>
        Sumar
      </Button>
      {/* <input type="text" placeholder="ingresa tu nombre" /> */}
      <TextField label="Nombre" variant="outlined" />
      <ShoppingCartIcon sx={{ color: "red" }} />
    </div>
  );
};

export default Home;
