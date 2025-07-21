import { Bell, ChevronDown, Menu, Search, Settings, Sun } from 'lucide-react'
import React from 'react'


function Header() {
  return (
    <div className='bg-white dark:bg-slate-900/80 backdrop-blur-xl border-b
    border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>
      
        {/* left section */}
        <div className='flex items-center space-x-4'>
          <button className='p-2 rounded-lg text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Menu className='w-6 h-6' />
          </button>

          <div className='hidden md:block '>
            <h1 className='text-2xl font-black text-slate-800 dark:text-white'>
              Dashboard
            </h1>
            <p>
              Welcome Serge, amazing to see you again!
            </p>

          </div>
        </div>

        {/* center */}
        <div className='flex-1 max-w-md mx-16'>
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -transform-y-1/2
            text-slate-400'/>
            <input
              type='text'
              placeholder='Search...'
              className='w-full pl-10  pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border
              border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white
              placeholder-slate-500 focus:outline-none focus:ring-2
              focus:ring-blue-500 focus:border-transparent transition-all'
              />
          </div>
        </div>

        {/* toggle */}
          <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300
         hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Sun className='w-5 h-5' />
          </button>

        {/* notification */}
        <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
          <Bell className='w-5 h-5' />
          <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs
          rounded-full flex items-center justify-center'>
            3
          </span>
        </button>

        {/* settings */}
        <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 
        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
          <Settings className='w-5 h-5' />
        </button>

        {/* user profile */}
        <div className='flex items-center space-x-3 pl-3 border-l border-slate-200
        dark:border-slate-700'>
          <img
            src='/profile.jpg'
            alt='user'
            className='w-10 h-10 rounded-full ring-2 ring-blue-100'
          />
          <div className='hidden md:block'>
            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>
              Serge Kovalenko
            </p>
            <p className='text-xs text-slate-500 dark:text-slate-400'>
              Administrator
            </p>
          </div>
          <ChevronDown className='w-4 h-4 text-slate-500 dark:text-slate-400' />
        </div>

      </div>
    </div>
  )
}

export default Header