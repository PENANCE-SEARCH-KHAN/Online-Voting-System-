import React from 'react'
import Sidebar from './components/layout/sidebar';
import Header from './components/layout/header';

 function App() {
    return <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
    dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 tracking-all duration-500'>
      <div className='flex flex-screen overflow-hidden'>
         <Sidebar />
         <div className='flex-1 flex flex-col overflow-hidden'>
         <Header/>

         </div>
      </div>
    </div>;
 }
  export default App;