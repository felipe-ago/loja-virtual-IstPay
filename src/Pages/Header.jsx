import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src="./src/assets/Logo.png" />
      <img className={styles.car} src="./src/assets/car.png" />
    </div>
  );
}
