import React from 'react';
import styles from './Modal.module.css'

export default function Modal({ children, title }) {
  return (
    <div className={styles.container} >
      <div className={styles.header}>
        <h2 className="text text_type_main-large">{title}</h2>
        <button className={styles.button}></button>
      </div>
      {children}
    </div >
  )
}

