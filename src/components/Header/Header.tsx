import logo from "../../assets/logo.png";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="Advinhe" />
    </header>
  );
}
