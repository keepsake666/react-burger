import React from 'react';
import styles from './Modal.module.css'
import PropTypes from 'prop-types';

export default function Modal({ children, title, setModalAtive }) {
  return (
    <div className={styles.container} onClick={e => e.stopPropagation()}>
      <div className={styles.header}>
        <h2 className="text text_type_main-large">{title}</h2>
        <button className={styles.button} onClick={() => setModalAtive(false)}></button>
      </div>
      {children}
    </div >
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  setModalAtive: PropTypes.func.isRequired,
}; 