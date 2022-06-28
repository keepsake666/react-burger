import React from 'react';
import styles from './ModalOverlay.module.css'
export default function ModalOverlay({ children, active, setActive }) {
  React.useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        setActive(false)
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <div className={active ? `${styles.popup} ${styles.active}` : `${styles.popup}`} onClick={() => setActive(false)}>
      {children}
    </div>
  )
}
