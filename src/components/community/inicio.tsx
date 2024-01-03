import React from "react";
import NavbarStream from "../Stream/navbarStream";
import MuxPlayer from "@mux/mux-player-react";
import styles from "./community.module.css";

function CommunityInit() {
  return (
    <>
      <NavbarStream />
      <div>
        <MuxPlayer
          className={styles.boxLiveStream}
          streamType="live"
          playbackId={"hIxif02fSy1FjW5JuzcMt01pw9rYPFzV6YbUPwZa3I82s"}
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
        />
      </div>
    </>
  );
}

export default CommunityInit;
