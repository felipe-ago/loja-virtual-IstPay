import styles from "./ListProducts.module.css";
import { API_URL } from "../../Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";

// Constante que irá coletar as informações dos produtos da API
export const ListProducts = () => {
  // For para validar as informações nas estrelas de avaliação
  const star = [];

  for (let i = 0; i < 5; i++) {
    star.push(i);
  }

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
                  <div className={styles.evaluations}>
                    {star.map((index) => (
                      <BiStar key={index} className={styles.star} />
                    ))}
                    <span><strong>{item.rating.rate}</strong></span>
                    <h4>Avaliações: {item.rating.count}</h4>
                    <br />
                  </div>
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
