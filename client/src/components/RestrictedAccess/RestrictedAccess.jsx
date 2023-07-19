import React from 'react'
import styles from '../RestrictedAccess/RestrictedAccess.module.css';

const RestrictedAccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Acceso Denegado
      </div>
    </div>
  )
}

export default RestrictedAccess;