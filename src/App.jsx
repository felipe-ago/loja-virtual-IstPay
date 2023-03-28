import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.css";
import { ListProducts } from "./Pages/listProducts/ListProducts";
import { ProductsId } from "./Pages/productsId/ProductsId";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <div className={styles.header}>
        <h1>  </h1>
      </div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<ProductsId />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
