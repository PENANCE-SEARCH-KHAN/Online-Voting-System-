import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CandidateDashboard() {
  const [selectedElection, setSelectedElection] = useState('presidential');

  // Sample election data with live vote counts
  const electionData = {
    presidential: [
      { name: "Sarah Johnson", votes: 1247 },
      { name: "John Smith", votes: 985 },
      { name: "Mike Davis", votes: 756 },
      { name: "Lisa Brown", votes: 432 },
      { name: "Others", votes: 180 }
    ],
    senate: [
      { name: "Sarah Johnson", votes: 892 },
      { name: "Robert Wilson", votes: 743 },
      { name: "Emma Thompson", votes: 621 },
      { name: "David Lee", votes: 398 },
      { name: "Others", votes: 156 }
    ],
    local: [
      { name: "Sarah Johnson", votes: 2105 },
      { name: "Tom Harris", votes: 1876 },
      { name: "Anna Clark", votes: 1342 },
      { name: "Chris Miller", votes: 987 },
      { name: "Others", votes: 445 }
    ]
  };

  const elections = [
    { id: 'presidential', title: 'Presidential Election 2025', status: 'Ongoing' },
    { id: 'senate', title: 'Senate Election 2025', status: 'Upcoming' },
    { id: 'local', title: 'Local Government Chairperson', status: 'Completed' }
  ];

  const currentData = electionData[selectedElection] || electionData.presidential;
  const selectedElectionTitle = elections.find(e => e.id === selectedElection)?.title || 'Presidential Election 2025';

  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      
      {/* 📊 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Votes Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-indigo-700 mb-1">Total Votes</h3>
              <p className="text-2xl font-bold text-indigo-600">
                {currentData.reduce((sum, item) => sum + item.votes, 0).toLocaleString()}
              </p>
            </div>
            <div className="bg-indigo-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Ranking Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-green-700 mb-1">Your Ranking</h3>
              <p className="text-2xl font-bold text-green-600">1st</p>
            </div>
            <div className="bg-green-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Total Voters Card */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-blue-700 mb-1">Total Voters</h3>
              <p className="text-2xl font-bold text-blue-600">5,000</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Voting Progress Card */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-purple-700 mb-1">Voting Progress</h3>
              <p className="text-2xl font-bold text-purple-600">24.9%</p>
            </div>
            <div className="bg-purple-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 📈 Live Vote Chart with Election Selection */}
      <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Live Vote Chart - {selectedElectionTitle}
          </h3>
          <select
            value={selectedElection}
            onChange={(e) => setSelectedElection(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {elections.map(election => (
              <option key={election.id} value={election.id}>
                {election.title}
              </option>
            ))}
          </select>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={currentData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="0" stroke="transparent" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip 
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Bar dataKey="votes" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} stroke="none" />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 📅 Upcoming Events */}
      <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
        <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Upcoming Events</h3>
        <ul className="space-y-4">
          <li className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Final Debate</span>
            </div>
            <span className="text-sm text-gray-500 font-medium bg-blue-50 px-3 py-1 rounded-full">Aug 15, 2025</span>
          </li>
          <li className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Voting Ends</span>
            </div>
            <span className="text-sm text-gray-500 font-medium bg-green-50 px-3 py-1 rounded-full">Aug 20, 2025</span>
          </li>
          <li className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Results Announcement</span>
            </div>
            <span className="text-sm text-gray-500 font-medium bg-purple-50 px-3 py-1 rounded-full">Aug 22, 2025</span>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default CandidateDashboard;
