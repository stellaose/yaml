import React from 'react'
import styles from '../Landing.module.scss'

const Card = ({
  children,
  title='Title'
} : {
  children: React.ReactNode;
  title?: string
}) => {
  return (
    <>
      <div className={styles.card_body}>
        <div className={styles.card_content}>
          <h3>{title}</h3>
        </div>
        
        <div className={styles.card_container}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Card