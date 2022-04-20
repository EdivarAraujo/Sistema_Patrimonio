import React, { useState } from "react";

import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

const Home = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Barra lateral de navegacao */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <section className="p-2">
        {children}
        </section>
       
      </div>
    </div>
  );
};

export default Home;
