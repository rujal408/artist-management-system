"use client";

import Button from "@/component/Button";
import Input from "@/component/Input";

export default function Login() {
  return (
    <form className="login-form">
      <Input type="email" name="email" />
      <Input type="password" name="password" />
      <Button type="submit">Login</Button>
    </form>
  );
}
