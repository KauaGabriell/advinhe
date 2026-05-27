import { Letter } from "../Letter/Letter";
import styles from "./LetterUsed.module.css";

export function LetterUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras Utilizadas</h5>

      <div>
        <Letter value="R" size="small" state="wrong" />
        <Letter value="X" size="small" state="wrong" />
        <Letter value="S" size="small" state="correct" />
      </div>
    </div>
  );
}
