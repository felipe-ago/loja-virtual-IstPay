import { Carrossel } from "./Carrossel";
import { CategoryProducts } from "./categoryProducts/CategoryProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./Home.module.css";
import { ListProducts } from "./listProducts/ListProducts";

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Carrossel/>
      <ListProducts />
      <Footer />
    </div>
  );
}
