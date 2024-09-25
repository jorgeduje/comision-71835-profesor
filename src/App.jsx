import Navbar from "./components/layouts/navbar/Navbar";
import Comments from "./components/pages/Comments";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Todos from "./components/pages/Todos";
import Users from "./components/pages/Users";

function App() {
  return (
    <div>
      <Navbar />
      {/* <ItemListContainer /> */}
      {/* <ItemDetailContainer /> */}
      <Todos />
      {/* <Comments /> */}
      {/* <Users /> */}
    </div>
  );
}

export default App;
