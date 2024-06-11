import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="auth-container p-5">{children}</div>;
};

export default AuthLayout;
