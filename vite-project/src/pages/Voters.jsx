import React from 'react';
import { useState } from 'react';
import { Users, CheckCircle, XCircle, Search } from 'lucide-react';

function Voters() {
  const [setSearchTerm] = useState('');
  return (
    <div className=' pb-6'>

      {/* Header section */}
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-slate-800 dark:text-white'>
          Voters
        </h2>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Manage and view all registered voters for the election.
        </p>
      </div>

      {/* Stats cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>

        {/* Registered Voters */}
        <div className='bg-white dark:bg-slate-900 shadow-md rounded-2xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow'>
          <div className='bg-blue-100 dark:bg-blue-800 p-3 rounded-full'>
            <Users className='w-6 h-6 text-blue-600 dark:text-blue-300' />
          </div>
          <div>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Registered Voters</p>
            <h3 className='text-xl font-bold text-slate-800 dark:text-white'>300</h3>
          </div>
        </div>

        {/* Voted */}
        <div className='bg-white dark:bg-slate-900 shadow-md rounded-2xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow'>
          <div className='bg-blue-100 dark:bg-blue-800 p-3 rounded-full'>
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-300" />
          </div>
          <div>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Voted</p>
            <h3 className='text-xl font-bold text-slate-800 dark:text-white'>500</h3>
          </div>
        </div>

        {/* Not Voted */}
        <div className='bg-white dark:bg-slate-900 shadow-md rounded-2xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow'>
          <div className='bg-blue-100 dark:bg-blue-800 p-3 rounded-full'>
            <XCircle className="w-6 h-6 text-red-600 dark:text-red-300" />
          </div>
          <div>
            <p className='text-sm text-slate-500 dark:text-slate-400'>Not Voted</p>
            <h3 className='text-xl font-bold text-slate-800 dark:text-white'>200</h3>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className='w-full max-w-sm mb-6'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search voters...'
            onChange= {(e) => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition'
          />
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500' />
        </div>
      </div>
    </div>
  );
}

export default Voters;
