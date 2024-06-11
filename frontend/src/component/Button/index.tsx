"use client";

import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
