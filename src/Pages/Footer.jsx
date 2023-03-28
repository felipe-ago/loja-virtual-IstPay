import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className={styles.description}>
        Loja Fictícia, desenvolvida por, Felipe Oliveira, para Teste
        Desenvolvedor Front-End
      </h3>
      <div className={styles.redes}>
      <h3>Redes e Diretórios</h3>
      <a href="https://github.com/felipe-ago">
        <img className={styles.logo} src="../src/assets/github.png" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/felipeantoniooliveira/">
        <img className={styles.logo} src="../src/assets/linkedin.png" /> LinkedIn
      </a>
      </div>
    </div>
  );
}
