import React from 'react'
import BodyLayout from './BodyLayout'
import styles from '../Landing.module.scss'

const TopBar = () => {
  return (
    <>
      <BodyLayout>
        <div className= {styles.top_body}>
          <div className={styles.top_body_content}>
            <div className={styles.top_content}>
              <div className={styles.p_tag}>
                <p>Program Details</p>
              </div>
              <div className={`${styles.p_tag} ${styles.tag_p}`}>
                <p>Application Form</p>
              </div>
              <div className={styles.p_tag}>
                <p>Workflow</p>
              </div>
              <div className={styles.img_tag}>
                <img src="/assets/Vector.png" alt=""/>
                
              </div>
              <div className={styles.p_tag}>
                <p>Preview</p>
              </div>
            </div>
          </div>
        </div>
      </BodyLayout>
    </>
  )
}

export default TopBar