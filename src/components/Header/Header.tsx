import logo from "../../assets/logo.png";
import restart from "../../assets/restart.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="Advinhe" />

      <div className={styles.actions}>
        <span className={styles.attempts}>
          <strong className={styles.attemptsCount}>5</strong> de 10 tentativas
        </span>

        <button
          className={styles.restartButton}
          type="button"
          aria-label="Reiniciar jogo"
        >
          <img className={styles.restartIcon} src={restart} alt="" />
        </button>
      </div>
    </header>
  );
}
