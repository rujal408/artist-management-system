"use client";

import React from "react";
import style from './style.module.css'

interface IProps extends React.HTMLProps<HTMLInputElement> {}

const Input: React.FC<IProps> = React.forwardRef((props, ref) => {
  return <input ref={ref} className={style.inputField} {...props} />;
});

export default Input;
