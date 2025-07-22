import React from 'react';
import { ArrowRight, UserCheck, Users, CalendarDays, CheckCircle } from 'lucide-react';

function StatsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>

      {/* Card 1 */}
      <div className='p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>Registered Voters</p>
          <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center'>
            <UserCheck className='text-blue-600 w-5 h-5' />
          </div>
        </div>
        <p className='text-3xl font-bold text-slate-800'>300</p>
        <p className='text-xs text-blue-600 mb-4'>75% done</p>
        <div className='mt-3'>
          <div className='h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden'>
            <div className='h-full w-[75%] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-500'></div>
          </div>
          <p className='text-xs text-blue-600 mt-1'>75% voter registration complete</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className='p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>Candidates</p>
          <div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center'>
            <Users className='text-green-600 w-5 h-5' />
          </div>
        </div>
        <p className='text-3xl font-bold text-slate-800'>50</p>
        <p className='text-xs text-green-600 mb-4'>40 valid</p>
        <div className='mt-3'>
          <div className='h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden'>
            <div className='h-full w-[60%] bg-gradient-to-r from-green-500 to-green-300 rounded-full transition-all duration-500'></div>
          </div>
          <p className='text-xs text-green-600 mt-1'>60% target achieved</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className='p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>Active Elections</p>
          <div className='w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center'>
            <CalendarDays className='text-yellow-600 w-5 h-5' />
          </div>
        </div>
        <p className='text-3xl font-bold text-slate-800'>23</p>
        <p className='text-xs text-yellow-600 mb-4'>Live</p>
        <div className='mt-3'>
          <div className='h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden'>
            <div className='h-full w-[90%] bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full transition-all duration-500'></div>
          </div>
          <p className='text-xs text-yellow-600 mt-1'>Almost complete</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className='p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300'>
        <div className='flex items-center justify-between mb-2'>
          <p className='text-sm font-medium text-slate-600 dark:text-slate-400'>Votes Cast</p>
          <div className='w-8 h-8 rounded-full bg-red-100 flex items-center justify-center'>
            <CheckCircle className='text-red-600 w-5 h-5' />
          </div>
        </div>
        <p className='text-3xl font-bold text-slate-800'>500</p>
        <p className='text-xs text-red-600 mb-4'>Needs improvement</p>
        <div className='mt-3'>
          <div className='h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden'>
            <div className='h-full w-[40%] bg-gradient-to-r from-red-500 to-red-300 rounded-full transition-all duration-500'></div>
          </div>
          <p className='text-xs text-red-600 mt-1'>Needs improvement</p>
        </div>
      </div>

    </div>
  );
}

export default StatsGrid;
