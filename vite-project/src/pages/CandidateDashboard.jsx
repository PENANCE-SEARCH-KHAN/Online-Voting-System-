import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarSection from "../components/candidate/SidebarSection";
import HeaderSection from "../components/candidate/HeaderSection";

const CandidateDashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarSection isCollapsed={isSidebarCollapsed} />
      <div className="flex-1 flex flex-col">
        <HeaderSection onToggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CandidateDashboard;
