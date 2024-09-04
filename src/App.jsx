import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "hola como estas";
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={saludo} y="2" maria="dasda" />
      {/* <ItemListContainer {greeting:{saludo} y:"2" maria:"dasda"} />   */}
    </div>
  );
}

export default App;
// props = {greeting:{saludo} y:"2" maria:"dasda"}
// props.maria
