"use client";

import React from "react";
import { useSidebarContext } from "../context/ContextDashboard";
import SideBar from "../slideBar/SideBar";
import styles from "./page.module.css";

// Pages
import Blog from "./pages/Blog";
import Artistas from "./pages/Artistas";
import Spotify from "./pages/Spotify";
import Ebooks from "./pages/Ebooks";
import Herramientas from "./pages/Herramientas";
import Fotos from "./pages/Fotos";
import { useMediaQuery } from "react-responsive";

function DashboardComponent() {
  const { stateSidebar, setStateSidebar } = useSidebarContext();
  const responsive = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <>
      <main className={styles.containerDash}>
        {responsive ? null : <SideBar />}
        <div className={styles.contentContainer}>
          {stateSidebar == "blog" ? <Blog /> : null}
          {stateSidebar == "artistas" ? <Artistas /> : null}
          {stateSidebar == "spotify" ? <Spotify /> : null}
          {stateSidebar == "ebooks" ? <Ebooks /> : null}
          {stateSidebar == "tools" ? <Herramientas /> : null}
          {stateSidebar == "fotos" ? <Fotos /> : null}
        </div>
      </main>
    </>
  );
}

export default DashboardComponent;
