import React, { useMemo, useEffect } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalElement = document.querySelector("#modal");

export default function Modal({ children, title, setActive, active }) {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (active) {
      modalElement.appendChild(element);
      return () => {
        modalElement.removeChild(element);
      };
    }
  });


  return createPortal(
    <>
      <ModalOverlay setActive={setActive} />
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button
            className={styles.button}
            onClick={() => setActive(false)}
          ></button>
        </div>
        {children}
      </div>
    </>,
    element
  );
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string,
  setModalAtive: PropTypes.func,
};
