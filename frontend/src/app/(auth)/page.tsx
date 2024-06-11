"use client";

import Button from "@/component/Button";
import Input from "@/component/Input";
import axiosInstance from "@/utils/axiosConfig";
import { storeToken } from "@/utils/token";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const router = useRouter()
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((th) => ({ ...th, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
     const res =  await axiosInstance.post("/users/login", value);
      await storeToken(res.data.token)
      router.push('/dashboard')
    } catch (err) {
      //
    }
  };

  return (
    <>
      <h1 className="bg-gray-300 p-5 text-xl">Login User</h1>
      <form  onSubmit={onSubmit}>
        <div className="login-form">
          <Input onChange={handleChange} type="email" name="email" />
          <Input onChange={handleChange} type="password" name="password" />
        </div>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
}
