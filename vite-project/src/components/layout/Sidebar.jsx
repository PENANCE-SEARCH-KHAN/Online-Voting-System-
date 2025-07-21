import React from 'react'
import { LayoutDashboard,  Users, List, KeyRound, Settings,HelpCircle,LogOut, ClipboardList} from 'lucide-react';


function Sidebar() {
  
  
 
  return (
    <div className='transition duration-300 case-in-out bg-white/80 dark:bg-slate-900/80
    background-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col
    relative z-10 h-screen'>  {/* <-- Added h-screen here */}
      
      {/* logo  */}
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-800 rounded-xl
          flex items-center justify-center shadow-lg'>
            <img src="/vote3.png" alt="Logo" className="w-20 20" />
          </div>

          {/* conditional rendering  */}
          <div>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>
              E-Vote Pro
            </h1>
            <p className='text-xs text-slat-500 dark:text-slate-400'>
              Admin Panel,
            </p>

          </div>
        </div>
      </div>

      {/* nav bar */}
    <nav className='flex-1 p-4 space-y-2 overflow-auto'>

      {/* Dashboard */}
        <a
          href="/dashboard"
          className="flex items-center space-x-3 p-2 rounded-lg font-bold bg-blue-500 text-white shadow group transition-colors hover:bg-blue-600 hover:ring-2 hover:ring-blue-300"
>
          <LayoutDashboard className='w-5 h-5 text-white' />
          <span className="font-medium">Dashboard</span>
        </a>

        {/* Voters */}
        <a
          href="/voters"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          < Users className='w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-white' />
          <span className="font-medium"> Voters</span>
        </a>

        {/* Candidates */}
        <a
          href="/candidates"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <List className='w-5 h-5 text-yellow-600 dark:text-yellow-400 group-hover:text-white' />
          <span className="font-medium">Candidates</span>
        </a>

        {/* Election  */}
        <a
          href="/elections"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <List className='w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-white' />
          <span className="font-medium">Elections</span>
        </a>
         
        {/* Results */}
        <a
          href="/Results"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <ClipboardList className='w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white' />
          <span className="font-medium">Results</span>
        </a>

        {/* OTP Management */}
        <a
          href="/otp"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <KeyRound className='w-5 h-5 text-pink-600 dark:text-pink-300 group-hover:text-white' />
          <span className="font-medium">OTP Management</span>
        </a>

        {/* Settings */}
        <a
          href="/settings"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <Settings className='w-5 h-5 text-gray-600 dark:text-slate-300 group-hover:text-white' />
          <span className="font-medium">Settings</span>
        </a>

        {/* Support */}
        <a
          href="/Support"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <HelpCircle className='w-5 h-5 text-orange-600 dark:text-orange-300 group-hover:text-white' />
          <span className="font-medium">Support</span>
        </a>

        {/* Logout */}
        <a
          href="/logout"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-red-300 hover:text-white group"
        >
          <LogOut className='w-5 h-5 text-red-600 dark:text-red-400 group-hover:text-white' />
          <span className="font-medium">LogOut</span>
        </a>

        
    </nav>

      {/* user profile */}
      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50
        dark:bg-slate-800/50 '>
          <img
            src='/profile.jpg'
            alt='user'
            className='w-10 h-10 rounded-full ring-2 ring-blue-100'
          />
          <div className='flex-1 min-w-0'>
            <div className='flex-1 min-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>
              Serge Johnson
              </p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Sidebar