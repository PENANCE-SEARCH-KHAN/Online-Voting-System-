import React from 'react'
import { Outlet } from "react-router-dom";
import Side from "../components/users/Side";
import Head from "../components/users/Head";


function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Side />
      <div className="flex-1 flex flex-col">
        <Head />

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard