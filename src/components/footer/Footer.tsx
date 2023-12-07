import React from "react";
import styles from "./footer.module.css"

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h2>Todo En Bicicleta</h2>
        <p>&copy; 2023 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default Footer;
