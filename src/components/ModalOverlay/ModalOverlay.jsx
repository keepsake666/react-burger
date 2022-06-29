import React from 'react';
import styles from './ModalOverlay.module.css'
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const modalElement = document.querySelector('body')

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

  const element = React.useMemo(() => document.createElement('div'), [])

  React.useEffect(() => {
    if (active) {
      modalElement.appendChild(element);
      return () => {
        modalElement.removeChild(element)
      }
    }
  })

  return createPortal(
    <div className={active ? `${styles.popup} ${styles.active}` : `${styles.popup}`} onClick={() => setActive(false)}>
      {children}
    </div>
    , element
  )
}

ModalOverlay.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
}; 