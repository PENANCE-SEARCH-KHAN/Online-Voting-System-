import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';
import Dashboard from './components/dashboard/Dashboard';
import Candidates from './pages/Candidates';
import Voters from './pages/Voters';
import Elections from './pages/Elections';
import Results from './pages/Results';
import Settings from './pages/Settings';
import Support from './pages/Support';
import About from './pages/About';

import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import OTPVerify from './pages/auth/OTPVerify';


// AppContent contains dashboard layout
function AppContent() {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = location.pathname;

  const onPageChange = (page) => {
    navigate(page);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Sidebar */}
      <Sidebar
        sidebarCollapsed={sideBarCollapsed}
        onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      {/* Main area with header and routed content */}
      <div className="flex-1 flex flex-col h-full">
        <Header
          sidebarCollapsed={sideBarCollapsed}
          onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
        />

        <main className="flex-1 overflow-y-auto bg-transparent">
          <div className="p-6 space-y-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/voters" element={<Voters />} />
              <Route path="/elections" element={<Elections />} />
              <Route path="/results" element={<Results />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

// App includes route distinction
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes - no sidebar/header */}
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/otp-verify" element={<OTPVerify />} />

        {/* Protected Routes - wrapped inside layout */}
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
