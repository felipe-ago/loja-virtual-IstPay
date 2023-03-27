import styles from "./ProductsId.module.css";
import { API_URL } from "../../Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  },[]);

  // Listar detalhes do produto clicado
  return (
    <>
      {loaded && <h3>Aguarde que estamos carregando seu produto...</h3>}
      <div className={""}>
        <img src={itemId.image} alt="" width={200} />
        <h2>{itemId.title}</h2>
        <strong>R$ {itemId.price}</strong>
        <p>{itemId.description}</p>
        <h3>{itemId.category}</h3>
      </div>
    </>
  );
};
