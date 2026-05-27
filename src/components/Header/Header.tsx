import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";

import styles from "./Header.module.css";

type Props = {
  current: number;
  max: number;
  onRestart: () => void;
};

export function Header({ current, max, onRestart }: Props) {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="Advinhe" />

      <div className={styles.actions}>
        <span className={styles.attempts}>
          <strong className={styles.attemptsCount}>{current}</strong> de {max}{" "}
          tentativas
        </span>

        <button
          className={styles.restartButton}
          type="button"
          aria-label="Reiniciar jogo"
          onClick={onRestart}
        >
          <img className={styles.restartIcon} src={restart} alt="" />
        </button>
      </div>
    </header>
  );
}
