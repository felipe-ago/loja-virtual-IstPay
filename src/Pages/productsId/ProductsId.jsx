import styles from "./ProductsId.module.css";
import { API_URL } from "../../Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const ProductsId = () => {
  const [loaded, setLoaded] = useState(false);
  const [itemId, setItemId] = useState([]);
  const { id } = useParams();

  //Requisição do Id do produto selecionado
  const getItemId = async () => {
    setLoaded(true);
    const res = await fetch(`${API_URL}/products/${id}`);
    const response = await res.json();
    setLoaded(false);
    setItemId(response);
  };

  useEffect(() => {
    getItemId();
  }, []);

  // Listar detalhes do produto clicado
  return (
    <div className={styles.global}>
      <Header />
      {loaded && <h3>Aguarde que estamos carregando seu produto...</h3>}
      <ul className={styles.ul}>
        <div className={styles.info}>
          <div className={styles.img}>
          <img src={itemId.image} alt="" width={200} />
          </div>
          <div className={styles.product_info}>
          <h2>{itemId.title}</h2>
          <strong>R$ {itemId.price}</strong>
          <p>{itemId.description}</p>
          </div>
        </div>
      </ul>
      <Footer />
    </div>
  );
};
