import React, {FC, useEffect} from "react";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay: FC<any>=({ setActive }) =>{
  useEffect(() => {
    const close = (e:KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [setActive]);

  return <div className={styles.popup} onClick={() => setActive(false)}></div>;
}

