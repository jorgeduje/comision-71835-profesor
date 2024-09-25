import Navbar from "./components/layouts/navbar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
