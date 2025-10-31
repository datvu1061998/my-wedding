"use client";

import React, { useEffect, useRef } from "react";
import "./styles.scss";

export default function Music() {
  const audioRef = useRef<any>(null);

  useEffect(() => {
    const button: any = document.querySelector(".play-audio");
    if (audioRef.current.paused) {
      button.style.animationPlayState = "running";
    } else {
      button.style.animationPlayState = "paused";
    }
  }, []);
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
