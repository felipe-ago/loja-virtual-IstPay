import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className={styles.header}>
      <Link to="/"><img className={styles.logo} src="../src/assets/Logo.png" /></Link>
      <img className={styles.car} src="../src/assets/car.png" />
    </div>
  );
}
