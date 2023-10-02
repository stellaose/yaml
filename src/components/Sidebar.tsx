import React from 'react'
import styles from '../Sidebar.module.scss'

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar_body}>
        <div className={styles.sidebar_content}>
          <img src="/assets/Menu.png" alt=""className={styles.menu}/>
            
          <div className={styles.sidebar_mid}>
            <img src="/assets/Home.png" alt="" className={styles.house}/>
            <img src="/assets/Document.png" alt="" className={styles.document}/>
          </div>
        </div>
        <p>NT</p>
      </div>
    </>
  )
}

export default Sidebar