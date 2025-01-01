import styles from "./leaderboard.module.css";
import { format } from "date-fns";

export default function Leaderboard({ leaderboard }) {
  return (
    <>
      <h1>Leaderboard:</h1>
      <table className={styles.table}>
        {leaderboard &&
          leaderboard.map((position, index) => {
            return (
              <tbody key={position.nickname} className={styles.section}>
                <tr>
                  <td>{index + 1}. </td>
                  <td>{position.nickname}</td>
                  <td>{format(new Date(position.time), "m.ss.SS")}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
    </>
  );
}