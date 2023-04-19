import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // className?: string;
}

export default function Input(props: Props) {
  const {
    type,
    onChange,
    placeholder,
    inputMode,
    defaultValue,
    style,
    className,
  } = props;
  return (
    <input
      className={`${styles.input} ${className}`}
      style={style}
      type={type}
      inputMode={inputMode}
      onChange={onChange}
      placeholder={placeholder}
      value={defaultValue}
    />
  );
}
