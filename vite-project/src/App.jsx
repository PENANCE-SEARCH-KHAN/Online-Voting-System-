import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';
import Dashboard from './components/dashboard/Dashboard';
import Candidates from './pages/Candidates';
import Voters from './pages/Voters';
import LogOut from './pages/LogOut';
import Elections from './pages/Elections';
import Results from './pages/Results';
import Settings from './pages/Settings';
import Support from './pages/Support';

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
      
      {/* Sidebar (Fixed Left) */}
      <Sidebar
        sidebarCollapsed={sideBarCollapsed}
        onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      {/* Main Area (Header + Content) */}
      <div className="flex-1 flex flex-col h-full">
        
        {/* Header (Fixed Top) */}
        <Header
          sidebarCollapsed={sideBarCollapsed}
          onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
        />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto bg-transparent">
          <div className="p-6 space-y-6">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/voters" element={<Voters />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/elections" element={<Elections />} />
              <Route path="/results" element={<Results />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

// Wrap AppContent with BrowserRouter
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
