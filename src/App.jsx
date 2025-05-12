// import './App.css'

 






import { Route, Routes } from "react-router-dom";
import { Header, ItemListContainer } from "./Components";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import Carts from "./pages/Carts";
import Check from "./pages/Check";
import About from "./pages/About";
import { useEffect } from "react";

//  import Counter from "./Components/Counter";

function App() {

//   const onResize = event => {
//     console.log(event)
//   }
//   window.addEventListener('resize', onResize)   
     
   
   
// useEffect(() =>{
//   window.removeEventListener(onResize)
// }, [])



  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/checkout" element={<Check />} />
        <Route
          path="*"
          element={<h1>Pagina no Encontrada - 404 not found</h1>}
        />
      </Routes>
      
    </>
  );
}

export default App;
