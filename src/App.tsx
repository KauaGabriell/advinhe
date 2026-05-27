import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { PalpiteInput } from "./components/Input";
import { Letter } from "./components/Letter";
import { LetterUsed } from "./components/LettersUsed";
import type { LetterUsedProps } from "./components/LettersUsed/LetterUsed";
import { Tip } from "./components/Tip";
import { type Challenge, WORDS } from "./utils/words";

export default function App() {
  const [attempts, setAttempts] = useState(0);
  const [letterUsed] = useState<LetterUsedProps[]>([]);
  const [_letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestartGame() {
    alert("Testando");
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);
    setAttempts(0);
    setLetter("");
  }

  function handleConfirm() {}

  useEffect(() => {
    startGame();
  });

  if (!challenge) return null;

  const letters = Array.from(
    { length: challenge.word.length },
    (_, position) => ({
      id: `${challenge.id}-${position}`,
    }),
  );

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestartGame} />
        <Tip tip="Uma das linguagens de programação mais utilizadas" />
        <div className={styles.word}>
          {letters.map((letter) => (
            <Letter key={letter.id} value="" />
          ))}
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <PalpiteInput
            autoFocus
            maxLength={1}
            placeholder="?"
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>
        <LetterUsed data={letterUsed} />
      </main>
    </div>
  );
}
