"use client";

import React, { useRef } from "react";
import "./styles.scss";

export default function Music() {
  const audioRef = useRef<any>(null);
  const play = () => {
    if (audioRef.current) {
      const button: any = document.querySelector(".play-audio");
      if (audioRef.current.paused) {
        audioRef.current.play();
        button.style.animationPlayState = "running";
      } else {
        audioRef.current.pause();
        button.style.animationPlayState = "paused";
      }
    } else {
    }
  };

  return (
    <div>
      <div>
        <button className="play-audio" onClick={play}>
          <img src="/imgs/song.jpg" />
        </button>
        <audio autoPlay ref={audioRef} src="/motdoi.mp3" />
      </div>
    </div>
  );
}
