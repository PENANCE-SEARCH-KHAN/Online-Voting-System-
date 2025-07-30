import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Users, List, Info, Settings, HelpCircle, LogOut, ClipboardList, Menu } from 'lucide-react';

function Sidebar({ sidebarCollapsed, onToggleSidebar, currentPage }) {
  // Helper function to check if link is active
  const isActive = (path) => currentPage === path;

  const linkBaseClasses = "flex items-center space-x-3 p-2 rounded-lg transition-colors group";
  const activeClasses = "bg-blue-500 text-white shadow hover:bg-blue-600 hover:ring-2 hover:ring-blue-300";
  const inactiveClasses = "hover:bg-blue-500 hover:text-white";

  return (
    <div className={`transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80
      backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col
      relative z-10 h-screen ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>

      {/* logo */}
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-800 rounded-xl
            flex items-center justify-center shadow-lg'>
              <img src="/vote3.png" alt="Logo" className="w-20 h-20 object-contain" />
            </div>

            {!sidebarCollapsed && (
              <div>
                <h1 className='text- font-bold text-slate-800 dark:text-white'>
                  VoteSecure
                </h1>
                <p className='text-xs text-slate-500 dark:text-slate-400'>
                  Admin Panel,
                </p>
              </div>
            )}
          </div>

          <button onClick={onToggleSidebar} className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
            hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* nav bar */}
      <nav className='flex-1 p-4 space-y-2 overflow-auto'>

        <Link
          to="/dashboard"
          className={`${linkBaseClasses} ${isActive('/dashboard') ? activeClasses : inactiveClasses}`}
        >
          <LayoutDashboard className={`w-5 h-5 ${isActive('/dashboard') ? 'text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Dashboard</span>}
        </Link>

        <Link
          to="/voters"
          className={`${linkBaseClasses} ${isActive('/voters') ? activeClasses : inactiveClasses}`}
        >
          <Users className={`w-5 h-5 ${isActive('/voters') ? 'text-white' : 'text-green-600 dark:text-green-400 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Voters</span>}
        </Link>

        <Link
          to="/candidates"
          className={`${linkBaseClasses} ${isActive('/candidates') ? activeClasses : inactiveClasses}`}
        >
          <Users className={`w-5 h-5 ${isActive('/candidates') ? 'text-white' : 'text-yellow-600 dark:text-yellow-400 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Candidates</span>}
        </Link>

        <Link
          to="/elections"
          className={`${linkBaseClasses} ${isActive('/elections') ? activeClasses : inactiveClasses}`}
        >
          <List className={`w-5 h-5 ${isActive('/elections') ? 'text-white' : 'text-purple-600 dark:text-purple-400 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Elections</span>}
        </Link>

        <Link
          to="/results"
          className={`${linkBaseClasses} ${isActive('/results') ? activeClasses : inactiveClasses}`}
        >
          <ClipboardList className={`w-5 h-5 ${isActive('/results') ? 'text-white' : 'text-blue-600 dark:text-blue-400 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Results</span>}
        </Link>

        <Link
          to="/about"
          className={`${linkBaseClasses} ${isActive('/otp') ? activeClasses : inactiveClasses}`}
        >
          <Info className={`w-5 h-5 ${isActive('/otp') ? 'text-white' : 'text-sky-500 dark:text-pink-300 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">About</span>}
        </Link>

        <Link
          to="/settings"
          className={`${linkBaseClasses} ${isActive('/settings') ? activeClasses : inactiveClasses}`}
        >
          <Settings className={`w-5 h-5 ${isActive('/settings') ? 'text-white' : 'text-gray-600 dark:text-slate-300 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Settings</span>}
        </Link>

        <Link
          to="/support"
          className={`${linkBaseClasses} ${isActive('/support') ? activeClasses : inactiveClasses}`}
        >
          <HelpCircle className={`w-5 h-5 ${isActive('/support') ? 'text-white' : 'text-orange-600 dark:text-orange-300 group-hover:text-white'}`} />
          {!sidebarCollapsed && <span className="font-medium">Support</span>}
        </Link>

        <Link
          to="/logout"
          className={`${linkBaseClasses} hover:bg-red-300 hover:text-white group rounded-lg flex items-center space-x-3 p-2`}
        >
          <LogOut className='w-5 h-5 text-red-600 dark:text-red-400 group-hover:text-white' />
          {!sidebarCollapsed && <span className="font-medium">LogOut</span>}
        </Link>

      </nav>

      {/* user profile */}
      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50'>
          <img src='/profile.jpg' alt='user' className='w-10 h-10 rounded-full ring-2 ring-blue-100' />
          {!sidebarCollapsed && (
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
                Serge Johnson
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
