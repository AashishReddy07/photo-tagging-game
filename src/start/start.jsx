import React from 'react';
import loadingImg from "../assets/parrot.png";
import styles from "./start.module.css";

export default function Start({ setOpenStart, startGame }) {
  return (
      <div className={styles.wrapper}>
        <img src={loadingImg} className={styles.parrot} alt="Parrot" />
      
        <h1>Photo Tagging Game</h1>
        <p>Your task is to find all the 4 characters in the image.</p>
        <button
          onClick={() => {
            setOpenStart(false);
            startGame();
          }}
        >
          Start!
        </button>
      </div>
  );
}