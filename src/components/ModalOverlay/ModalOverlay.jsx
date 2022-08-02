import React, { useEffect } from 'react';
import styles from './ModalOverlay.module.css'
import PropTypes from 'prop-types';

export default function ModalOverlay({ setActive }) {

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setActive(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [setActive])

  return (
    <div className={styles.popup} onClick={() => setActive(false)}>
    </div>
  )
}

ModalOverlay.propTypes = {
  setActive: PropTypes.func,
}; 