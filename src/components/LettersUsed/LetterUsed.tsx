import { Letter } from "../Letter";
import styles from "./LetterUsed.module.css";

export type LetterUsedProps = {
  value: string;
  correct: boolean;
};

type Props = {
  data: LetterUsedProps[];
};

export function LetterUsed({ data }: Props) {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras Utilizadas</h5>

      <div>
        {data.map(({ value, correct }) => (
          <Letter
            key={value}
            value={value}
            size="small"
            state={correct ? "correct" : "wrong"}
          />
        ))}
      </div>
    </div>
  );
}
