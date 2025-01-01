import { useState } from "react";
import Scene from "../scene/scene.jsx";
import Start from "../start/start";
import Endgame from "../endgame/endgame";
import Leaderboard from "../leaderboard/leaderboard";
import styles from "./App.module.css";

function App() {
  const [openStart, setOpenStart] = useState(true);
  const [openEnd, setOpenEnd] = useState(false);
  const [openBoard, setOpenBoard] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endtime, setEndTime] = useState(0);

  function startGame() {
    document.body.style.overflow = "auto";
    window.scrollTo(0, 0);
    setStartTime(Date.now());
    // Additional logic to start the game
  }

  function stopGame() {
    const endTime = Date.now();
    setEndTime(endTime - startTime);
    setOpenFinish(true);
    // Additional logic to stop the game
  }

  return (
    <div className={styles.app}>
      {openStart && <Start setOpenStart={setOpenStart} startGame={startGame} />}
      {!openStart && !openEnd && <Scene />}
      {openEnd && <Endgame />}
      {openBoard && <Leaderboard />}
    </div>
  );
}

export default App;