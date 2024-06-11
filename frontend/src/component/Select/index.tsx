"use client";

import React from "react";
import style from "./style.module.css";

type LabelValue = { label: string; value: string };

interface IProps {
  options: LabelValue[];
  onChange: (v: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  placeholder?: string;
  name: string;
}

const Select: React.FC<IProps> = (props) => {
  const { name, options, onChange, value, placeholder } = props;
  
  return (
    <div className={style.customSelect}>
      <select
        name={name}
        onChange={onChange}
        className={style.selectField}
        value={value}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
