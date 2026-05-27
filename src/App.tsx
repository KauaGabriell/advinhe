import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { PalpiteInput } from "./components/Input";
import { Letter } from "./components/Letter";
import { LetterUsed } from "./components/LettersUsed";
import { Tip } from "./components/Tip";

export default function App() {
  function handleRestartGame() {
    alert("Testando");
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <PalpiteInput autoFocus maxLength={1} placeholder="?" />
          <Button title="Confirmar" />
        </div>
        <LetterUsed />
      </main>
    </div>
  );
}
