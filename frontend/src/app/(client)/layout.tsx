import Navbar from "@/component/NavBar";
import React from "react";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-5">
      <Navbar />
      {children}
    </div>
  );
};

export default ClientLayout;
