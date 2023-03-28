import { Carrossel } from "./Carrossel/Carrossel";
import { CategoryProducts } from "./categoryProducts/CategoryProducts";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
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
