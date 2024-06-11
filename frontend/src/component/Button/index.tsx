"use client";

import React from "react";
import style from './style.module.css'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return <button className={style.buttonElement} {...rest}>{children}</button>;
};

export default Button;
