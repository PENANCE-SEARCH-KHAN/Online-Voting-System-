import { Bell, ChevronDown, Search, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
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

  return (
    <div className='bg-white border-b border-slate-200/50 px-6 py-4'>
      <div className='flex items-center justify-between'>

        {/* left section */}
        <div className='flex items-center space-x-4'>
          <div className='hidden md:block'>
            <h1 className='text-2xl font-black text-slate-800'>
              Dashboard
            </h1>
            <p>
              Welcome Serge, let's deliver a fair election
            </p>
          </div>
        </div>

        {/* right section with icons */}
        <div className='flex items-center space-x-2'>
          {/* notification */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className='relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors'
            >
              <Bell className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
                {notifications.filter(n => !n.read).length}
              </span>
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="fixed right-6 top-16 w-80 bg-white rounded-lg shadow-2xl border border-slate-200 z-[9999]">
                <div className="p-4 border-b border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-4 border-b border-slate-100 last:border-b-0">
                      <div className="flex items-start space-x-3">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{notif.title}</p>
                          <p className="text-xs text-slate-600 mt-1">{notif.message}</p>
                          <p className="text-xs text-slate-500 mt-2">{notif.time}</p>
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
            className='relative p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors'
          >
            <Settings className='w-5 h-5' />
          </button>

          {/* user profile */}
          <div className='flex items-center space-x-3 pl-3 border-l border-slate-200 '>
            <img
              src='/profile.jpg'
              alt='user'
              className='w-10 h-10 rounded-full ring-2 ring-blue-100'
            />
            <div className='hidden md:block'>
              <p className='text-sm font-medium text-slate-500'>
                Serge Johnson
              </p>
              <p className='text-xs text-slate-500'>
                Administrator
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
