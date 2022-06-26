import React from 'react';
import styles from './ModalOverlay.module.css'
import Modal from '../Modal/Modal';
export default function ModalOverlay({ children }) {
  return (
    <div className={styles.popup}>
      {children}
    </div>
  )
}
