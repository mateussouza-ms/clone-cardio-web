import React, { ReactNode } from "react";

import styles from "../styles/components/Input.module.css";

interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  children?: ReactNode;
}

const Input = ({ type, name, label, placeholder, children }: InputProps) => {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} placeholder={placeholder} />
      {children}
    </div>
  );
};

Input.defaultProps = {
  placeholder: null,
  children: null,
};

export default Input;
