import type { ComponentProps } from "react";
import styles from "./PalpiteInput.module.css";

type Props = ComponentProps<"input">;

export function PalpiteInput({ ...rest }: Props) {
  return <input type="text" className={styles.input} {...rest} />;
}
