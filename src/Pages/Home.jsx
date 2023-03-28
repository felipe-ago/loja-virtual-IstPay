import { CategoryProducts } from "./categoryProducts/CategoryProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./Home.module.css";
import { ListProducts } from "./listProducts/ListProducts";

export function Home() {
  return (
    <div>
      <Header />
      <ListProducts />
      <Footer />
    </div>
  );
}
