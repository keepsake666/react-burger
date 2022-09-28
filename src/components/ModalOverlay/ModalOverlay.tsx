import React, { FC, useEffect } from "react";
import styles from "./ModalOverlay.module.css";

interface IModalActive {
  setActive: (bool: boolean) => void;
}

export const ModalOverlay: FC<IModalActive> = ({ setActive }) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setActive]);

  return <div className={styles.popup} onClick={() => setActive(false)}></div>;
};
