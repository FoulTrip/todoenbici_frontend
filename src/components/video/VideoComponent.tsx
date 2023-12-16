import React, { useEffect, useRef } from "react";
import styles from "./video.module.css";
import { useRouter } from "next/navigation";

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const video = videoRef.current;
        if (video) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          });
        }
      },
      {
        threshold: 0.5, // El video se reproducirá cuando el 50% de él esté visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video className={styles.video} ref={videoRef} src="/video001.mp4" />
      <button
        className={styles.playButton}
        onClick={() => router.push("https://www.youtube.com/@TodoenBicicleta")}
      >
        Mira mis videos
      </button>
    </div>
  );
};

export default VideoComponent;
