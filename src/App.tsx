import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { PalpiteInput } from "./components/Input";
import { Letter } from "./components/Letter";
import { LetterUsed } from "./components/LettersUsed";
import type { LetterUsedProps } from "./components/LettersUsed/LetterUsed";
import { Tip } from "./components/Tip";
import { type Challenge, WORDS } from "./utils/words";

const ATTEMPTS_MARGIN = 3;
export default function App() {
  const [score, setScore] = useState(0);
  const [letterUsed, setLetterUsed] = useState<LetterUsedProps[]>([]);
  const [letter, setLetter] = useState("");
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  const startGame = useCallback(() => {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];

    setChallenge(randomWord);

    setScore(0);
    setLetter("");
    setLetterUsed([]);
  }, []);

  function handleRestartGame() {
    startGame();
  }

  function handleConfirm() {
    if (!challenge) return null;

    if (!letter.trim()) {
      return alert("Insira uma Letra");
    }

    const value = letter.toUpperCase();
    const exists = letterUsed.find((used) => used.value === value);
    if (exists) return alert("Você já usou essa letra");

    const hits = challenge.word
      .toUpperCase()
      .split("")
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = score + hits;

    setLetterUsed((prevState) => [...prevState, { value, correct }]);
    setScore(currentScore);
    setLetter("");
  }

  const endGame = useCallback(
    (message: string) => {
      alert(message);
      startGame();
    },
    [startGame],
  );

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (!challenge) return;

    const timeoutId = setTimeout(() => {
      if (score === challenge.word.length) {
        endGame("Parabéns, você descobriu a palavra");
        return;
      }

      const attemptLimit = challenge.word.length + ATTEMPTS_MARGIN;

      if (letterUsed.length === attemptLimit) {
        endGame("Que Pena! Você usou todas as tentativas");
      }
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [challenge, score, letterUsed.length, endGame]);

  if (!challenge) return null;

  const letters = Array.from(
    challenge.word.toUpperCase(),
    (value, position) => ({
      id: `${challenge.id}-${position}`,
      value,
    }),
  );

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={letterUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestartGame}
        />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {letters.map((currentLetter) => {
            const used = letterUsed.find(
              (usedLetter) => usedLetter.value === currentLetter.value,
            );

            return (
              <Letter
                key={currentLetter.id}
                value={used?.correct ? currentLetter.value : ""}
                state={used?.correct ? "correct" : "default"}
              />
            );
          })}
        </div>

        <h4>Palpite</h4>
        <div className={styles.guess}>
          <PalpiteInput
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button title="Confirmar" onClick={handleConfirm} />
        </div>
        <LetterUsed data={letterUsed} />
      </main>
    </div>
  );
}
