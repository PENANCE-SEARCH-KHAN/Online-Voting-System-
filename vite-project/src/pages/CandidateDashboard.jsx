import React from "react";
import { Outlet } from "react-router-dom";
import SidebarSection from "../components/candidate/SidebarSection";
import HeaderSection from "../components/candidate/HeaderSection";

const CandidateDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarSection />
      <div className="flex-1 flex flex-col">
        <HeaderSection />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CandidateDashboard;
