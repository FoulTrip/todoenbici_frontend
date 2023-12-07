import ProductsCard from "@/components/cards/productsCard";
import Navbar from "@/components/navBars/NavBar";
import React from "react";
import styles from "./styles.module.css"

function Shop() {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.searchBox}></div>
        <ProductsCard />
      </main>
    </>
  );
}

export default Shop;
