import React from 'react'
import { LayoutDashboard,  Users, ChevronDown, ChevronUp, BarChart, List, KeyRound, Settings,HelpCircle,LogOut, ClipboardList} from 'lucide-react';
import { useState } from 'react';

function Sidebar() {
  const [votersOpen, setVotersOpen] = useState(false);
  const [candidatesOpen, setCandidatesOpen] = useState(false);
  const [electionOpen, setElectionOpen] = useState(false);
  
 
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

        {/* Voters Dropdown */}
        <div>
          <button
            type="button"
            onClick={() => setVotersOpen(!votersOpen)}
            className="flex items-center justify-between w-full p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
          >
            <span className="flex items-center space-x-3">
              <Users className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
              <span className="font-medium">Voters</span>
            </span>
            {votersOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {votersOpen && (
            <div className="ml-8 mt-1 space-y-1">
              <a href="/voters/view" className="block p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900">View Voters</a>
              <a href="/voters/manage" className="block p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900">Manage Voters</a>
            </div>
          )}
        </div>

        {/* Candidates Dropdown */}
        <div>
          <button
            type="button"
            onClick={() => setCandidatesOpen(!candidatesOpen)}
            className="flex items-center justify-between w-full p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
          >
            <span className="flex items-center space-x-3">
              <List className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
              <span className="font-medium">Candidates</span>
            </span>
            {candidatesOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {candidatesOpen && (
            <div className="ml-8 mt-1 space-y-1">
              <a href="/candidates/view" className="block p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900">View Candidates</a>
              <a href="/candidates/manage" className="block p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900">Manage Candidates</a>
            </div>
          )}
        </div>

        {/* Election Dropdown */}
         <div>
         <button
            type="button"
            onClick={() => setElectionOpen(!electionOpen)}
            className="flex items-center justify-between w-full p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
     >
            <span className="flex items-center space-x-3">
            <BarChart className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
            <span className="font-medium">Election</span>
            </span>
            {electionOpen ? (
            <ChevronUp className="w-4 h-4" />
            ) : (
            <ChevronDown className="w-4 h-4" />
           )}
          </button>
          {electionOpen && (
            <div className="ml-8 mt-1 space-y-1">
              <a href="/election/add" className="block p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900">Add Election</a>
              <a href="/election/view" className="block p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900">View Election</a>
          </div>
        )}
      </div>

        {/* Results */}
        <a
          href="/Results"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <ClipboardList className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
          <span className="font-medium">Results</span>
        </a>

        {/* OTP Management */}
        <a
          href="/otp"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <KeyRound className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
          <span className="font-medium">OTP Management</span>
        </a>

        {/* Settings */}
        <a
          href="/settings"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <Settings className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
          <span className="font-medium">Settings</span>
        </a>

        {/* Support */}
        <a
          href="/Support"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-blue-500 hover:text-white group"
        >
          <HelpCircle className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
          <span className="font-medium">Support</span>
        </a>

        {/* Logout */}
        <a
          href="/logout"
          className="flex items-center space-x-3 p-2 rounded-lg transition-colors hover:bg-red-300 hover:text-white group"
        >
          <LogOut className='w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white' />
          <span className="font-medium">LogOut</span>
        </a>

        <p className="mt-4 text-xs text-center italic text-blue-500 dark:text-blue-300">
            Secure. Reliable. Trusted Voting.
       </p>
        
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