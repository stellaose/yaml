import React from 'react'
import styles from '../Landing.module.scss'

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className= {checked ? styles.checked_green : styles.checked_white}>
      <label >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <svg
          className={checked ? styles.checkbox_active : styles.checkbox}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="3"
            stroke={checked ? '#fff' : "none"}
          />
        </svg>
        {label}
      </label>
    </div>
   
  );
};

export default Checkbox;
