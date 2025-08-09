import { Bell, ChevronDown, Search, Settings, Sun, Moon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  //  You were missing this part!
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem('VoteSecure') || ''
  );
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, ] = useState([
    {
      id: 1,
      type: 'success',
      title: 'Election Created',
      message: 'New election "Presidential 2024" has been created successfully',
      time: '2 minutes ago',
      read: false,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Voter Registration',
      message: '500 new voter registrations pending approval',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'System Update',
      message: 'System maintenance scheduled for tonight at 2 AM',
      time: '3 hours ago',
      read: true,
    },
  ]);

  const changeThemeHandler = () => {
    const newTheme = darkTheme === 'dark' ? '' : 'dark';
    localStorage.setItem('VoteSecure', newTheme);
    setDarkTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    if (darkTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, [darkTheme]);

  return (
    <div className='bg-white dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4'>
      <div className='flex items-center justify-between'>

        {/* left section */}
        <div className='flex items-center space-x-4'>
          <div className='hidden md:block'>
            <h1 className='text-2xl font-black text-slate-800 dark:text-white'>
              Dashboard
            </h1>
            <p>
              Welcome Serge, let's deliver a fair election
            </p>
          </div>
        </div>

        {/* center */}
        <div className='flex-1 max-w-md mx-16'>
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
            <input
              type='text'
              placeholder='Search...'
              className='w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border
              border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white
              placeholder-slate-500 focus:outline-none focus:ring-2
              focus:ring-blue-500 focus:border-transparent transition-all'
            />
          </div>
        </div>

        {/* toggle */}
        <button
          className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          onClick={changeThemeHandler}
        >
          {darkTheme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* notification */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
          >
            <Bell className='w-5 h-5' />
            <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
              {notifications.filter(n => !n.read).length}
            </span>
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="fixed right-6 top-16 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-2xl border border-slate-200 dark:border-slate-700 z-[9999]">
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</h3>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-4 border-b border-slate-100 dark:border-slate-700 last:border-b-0">
                    <div className="flex items-start space-x-3">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900 dark:text-white">{notif.title}</p>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{notif.message}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{notif.time}</p>
                      </div>
                      {!notif.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* settings */}
        <button
          onClick={() => navigate('/settings')}
          className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
        >
          <Settings className='w-5 h-5' />
        </button>

        {/* user profile */}
        <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700'>
          <img
            src='/profile.jpg'
            alt='user'
            className='w-10 h-10 rounded-full ring-2 ring-blue-100'
          />
          <div className='hidden md:block'>
            <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>
              Serge Johnson
            </p>
            <p className='text-xs text-slate-500 dark:text-slate-400'>
              Administrator
            </p>
          </div>
          <ChevronDown className='w-4 h-4 text-slate-500 dark:text-slate-400' />
        </div>

      </div>
    </div>
  );
}

export default Header;
