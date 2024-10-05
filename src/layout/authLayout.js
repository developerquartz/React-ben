import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Header/Sidebar";
const AuthLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <main className="mainBody">
        <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        {children}
      </main>
    </>
  );
};

export default AuthLayout;
