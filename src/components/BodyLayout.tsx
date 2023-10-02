import React from 'react'
import styles from '../Sidebar.module.scss'

const BodyLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <>
      <div className={styles.body_layout}>
        {children}
      </div>
    </>
  )
}

export default BodyLayout