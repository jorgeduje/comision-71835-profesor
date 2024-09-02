import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";
// import { Home, array } from "./components/home/Home";
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      {/*  aca el home  */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
