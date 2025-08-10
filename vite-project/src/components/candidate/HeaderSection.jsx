import React, { useState } from "react";
import { Search, Bell, Settings, ChevronDown, User, LogOut } from "lucide-react";

const HeaderSection = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      {/* Left: title and searchbar */}
      <div className="flex items-center space-x-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-800 dark:text-white">Candidates Dashboard</h1>
          <p>Welcome back Serge lets deliver a fair election</p>
        </div>

        {/* Searchbar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200
            dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none
            focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"/>
        </div>
      </div>

      {/* Right: Action */}
      <div className="flex items-center space-x-3">
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg hover:bg-gray-100"
          >
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute top-1 right-1 block h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-xl border border-gray-100 z-50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3">
                <h3 className="text-white font-semibold text-lg flex items-center">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                  <span className="ml-auto bg-white/20 text-white text-xs px-2 py-1 rounded-full">3</span>
                </h3>
              </div>
              
              <div className="max-h-80 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                  {/* Notification Item 1 */}
                  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Bell className="h-5 w-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Election Results</p>
                        <p className="text-sm text-gray-600 mt-1">Election results will be published soon. Stay tuned for updates!</p>
                        <p className="text-xs text-gray-400 mt-2">2 hours ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Notification Item 2 */}
                  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">Profile Updated</p>
                        <p className="text-sm text-gray-600 mt-1">Your profile was updated successfully with new information.</p>
                        <p className="text-xs text-gray-400 mt-2">1 day ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Notification Item 3 */}
                  <div className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                          <Settings className="h-5 w-5 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">New Election Round</p>
                        <p className="text-sm text-gray-600 mt-1">New election round starting next week. Prepare your campaign materials!</p>
                        <p className="text-xs text-gray-400 mt-2">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                <button className="w-full text-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                  View All Notifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
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
                <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                  <User className="h-4 w-4 mr-3 text-gray-500" />
                  <span>View Profile</span>
                </button>
                
                <div className="border-t border-gray-100 my-1"></div>
                
                <button className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200">
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
