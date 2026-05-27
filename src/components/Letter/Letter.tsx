import styles from "./Letter.module.css";

type Props = {
  value?: string;
  size?: "default" | "small";
  state?: "default" | "correct" | "wrong";
};

export function Letter({ value, size = "default", state = "default" }: Props) {
  return (
    <div
      className={`
        ${styles.letter}
        ${size === "small" && styles.letterSmall}
        ${state === "correct" && styles.letterCorrect}
        ${state === "wrong" && styles.letterWrong}`}
    >
      <span>{value}</span>
    </div>
  );
}
