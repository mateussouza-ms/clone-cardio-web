import React from "react";

import styles from "../styles/components/Button.module.css";

interface ButtonProps {
  value: string;
  onClick: () => void;
}

const Button = ({ value, onClick }: ButtonProps) => {
  return (
    <button className={styles.btnSubmit} type="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
