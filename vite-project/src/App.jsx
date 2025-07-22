import React from 'react'
import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';
import { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';

 function App() {
   const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
   const [currentPage, setCurrentPage] = useState('dashboard');

    return <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 tracking-all duration-500'>
      <div className='flex flex-screen overflow-hidden'>
         <Sidebar 
             sidebarCollapsed={sideBarCollapsed} 
             onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
             currentPage={currentPage}
             onPageChange={setCurrentPage}
         />
         <div className='flex-1 flex flex-col overflow-hidden'>

         <Header 
           sidebarCollapsed= {sideBarCollapsed} 
           onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
           />
           
          <main className='flex-1 overflow-y-auto bg-transparent '>
            <div className='p-6 space-y-6'>
              {currentPage === 'dashboard' && <Dashboard />}
              </div>
          </main>

         </div>
      </div>
    </div>;
 }
  export default App;