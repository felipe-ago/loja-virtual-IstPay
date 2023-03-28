import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <h3 className={styles.description}>
        Loja Fictícia, desenvolvida por, Felipe Oliveira, para Teste
        Desenvolvedor Front-End
      </h3>
      <h3 className={styles.redes}>Redes e Diretórios</h3>
      <a><img src=""/> GitHub</a>
      <a><img/> LinkedIn</a>
    </div>
  );
}
