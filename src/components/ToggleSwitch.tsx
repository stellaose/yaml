import React from 'react'
import styles from '../Landing.module.scss'

const ToggleSwitch = ({ 
  label = '' ,
  checked = false,
  id = ''
} : {
  label: string;
  checked: boolean;
  id: string;
}) => {
  
  return (
    <div className={styles.toggle_container}>
      <div className={styles.toggle_switch}>
        <input 
          type="checkbox" 
          className={styles.toggle_checkbox} 
          name={id} 
          id={id} 
          checked={checked} 
          readOnly
        />
        <label className={`${styles.toggle_label} ${checked ? styles.toggle_on : styles.toggle_off}`} htmlFor={id}>
          <span className={styles.toggle_label_inner} />
          <span className={styles.toggle_label_switch} />
        </label>
      </div>
      <div className={styles.span}><span>{label}</span></div>
    </div>
  );
};

export default ToggleSwitch