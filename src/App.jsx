import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import { ListProducts } from "./Pages/listProducts/ListProducts";
import { ProductsId } from "./Pages/productsId/ProductsId";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ListProducts />} />
          <Route path="/ProductsId/:id" element={<ProductsId />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
