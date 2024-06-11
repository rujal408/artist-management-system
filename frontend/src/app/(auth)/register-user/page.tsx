"use client";

import Button from "@/component/Button";
import Input from "@/component/Input";
import Select from "@/component/Select";
import React, { FormEvent, useState } from "react";

const RegisterUser = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((th) => ({ ...th, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValue((th) => ({ ...th, [name]: value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <>
      <h1 className="bg-gray-300 p-5 text-xl">Register User</h1>
      <form onSubmit={onSubmit} className="register-form">
        <div>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
          />
          <Input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
          />
          <Input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Select
            name="gender"
            onChange={handleSelectChange}
            value={value.gender}
            placeholder="Select gender"
            options={[
              { label: "Male", value: "M" },
              { label: "Female", value: "F" },
            ]}
          />
          <Select
            name="role"
            onChange={handleSelectChange}
            value={value.role}
            placeholder="Select role"
            options={[
              { label: "Admin", value: "ADMIN" },
              { label: "Manager", value: "MANAGER" },
              { label: "Artist", value: "ARTIST" },
            ]}
          />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
};

export default RegisterUser;
