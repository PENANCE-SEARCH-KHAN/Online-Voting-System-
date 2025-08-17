
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Settings, ChevronDown, User, LogOut, Menu } from "lucide-react";


const HeaderSection = ({ onToggleSidebar }) => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleSettingsClick = () => {
    navigate('/user-dashboard/user-settings');
  };

  const handleSignOut = () => {
    navigate('/auth/login');
  };

  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      {/* Left: menu icon, title and searchbar */}
      <div className="flex items-center space-x-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white">User Dashboard</h1>
          <p>Welcome back Serge lets deliver a fair election</p>
        </div>
      </div>

      {/* Right: Action */}
      <div className="flex items-center space-x-3">
        {/* Settings */}
        <button 
          onClick={handleSettingsClick}
          className="p-2 rounded-lg hover:bg-gray-100">
          <Settings className="h-5 w-5 text-gray-600" />
        </button>

        {/* profile Menu */}
        <div className="relative">
          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
          >
            <img 
              src="/profile.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full border"
            />
            <span className="font-medium">John Doe</span>
            <ChevronDown className="h-4 w-4 text-gray-600" />
          </div>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 z-50 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3">
                <h3 className="text-white font-semibold text-lg flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Account
                </h3>
              </div>
              
              <div className="py-2">
                
                
                <div className="border-t border-gray-100 my-1"></div>
                
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
                  <LogOut className="h-4 w-4 mr-3" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
