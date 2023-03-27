import styles from "./ProductsId.module.css";
import { API_URL } from "../../Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ProductsId = () => {
  const { itemId, setItemId } = useState([]);
  const { id } = useParams();

  const getItemmId = async () => {
    const res = await fetch(`${API_URL}/products/${id}`);
    const response = await res.json();
    setItemId(response);
  };

  useEffect(() => {
    getItemmId();
  });

  return (
    <>
      <h1>Hello Word!</h1>
    </>
  );
};
