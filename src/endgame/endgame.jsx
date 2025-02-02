import { format } from "date-fns";
import styles from "./endgame.module.css";

export default function Endgame({
  time,
  startTime,
  saveUser,
  setNickname,
  inputError,
}) {
  return (
    <>
      <h1>Congratulations!</h1>
      <p>You successfully found all the hidden characters!</p>
      <h3>Your time:</h3>
      <h3>{format(time - startTime, "m.ss.SS")} seconds</h3>
      <p>Enter your nickname:</p>
      <form onSubmit={saveUser} method="post">
        <div className={styles.flex}>
          <input
            type="text"
            name="nickname"
            id="nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
          {inputError && <div className={styles.inputError}>{inputError}</div>}
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}