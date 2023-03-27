import styles from "./ListProducts.module.css";
import { API_URL } from "../../Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Constante que irá coletar as informações dos produtos da API
export const ListProducts = () => {
  const [data, setData] = useState([]);

  const listDataProducts = async () => {
    const res = await fetch(`${API_URL}/products`);
    const response = await res.json();
    setData(response);
  };

  useEffect(() => {
    listDataProducts();
  }, []);

  // Exibindo Produtos na Tela com Rota para informações do produto
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.list_products}>
          {data.map((item, index) => {
            return (
              <div key={index} className={styles.list_items}>
                <Link to={`/products/${item.id}`} className={styles.link}>
                  <img src={item.image} alt="Imagem do Produto" width={200} />
                  <h2>{item.title}</h2>
                  <br />
                  <button className={styles.btn_info}>Mais Informações</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
