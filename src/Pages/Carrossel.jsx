import styles from "./Carrossel.module.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import image1 from "../assets/carrosel/1.jpg";
import image2 from "../assets/carrosel/2.jpg";
import image3 from "../assets/carrosel/3.jpg";
import image4 from "../assets/carrosel/4.jpg";
import image5 from "../assets/carrosel/5.jpg";

const images = [image1, image2, image3, image4, image5];

export function Carrossel() {
  const carrossel = useRef();
  const [width, setwidth] = useState(0);

  useEffect(() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth);
    setwidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth);
  });
  return (
    <div>
    <h1>JOGUE A IMAGEM PARA O LADO E VEJA O CARROSSEL</h1>
    <div className={styles.carrossel}>
      <motion.div
        ref={carrossel}
        className={styles.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {images.map((image) => (
            <motion.div className={styles.item} key={image}>
              <img src={image} alt="Imagens do Carrossel de Imagens" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
}
