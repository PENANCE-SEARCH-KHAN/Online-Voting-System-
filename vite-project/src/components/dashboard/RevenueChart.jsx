import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { BarChart2 } from 'lucide-react';

// Sample data
const data = [
  { name: 'Alice', votes: 120 },
  { name: 'Bob', votes: 90 },
  { name: 'Charlie', votes: 70 },
  { name: 'Diana', votes: 50 },
  { name: 'Ethan', votes: 85 },
  { name: 'Faith', votes: 60 },
  { name: 'George', votes: 100 },
  { name: 'Hannah', votes: 40 },
];

// COMPONENT 1: Voter Turnout Card
function VoterTurnoutCard() {
  const totalVoters = 1000;
  const votesCast = 650;
  const percentage = ((votesCast / totalVoters) * 100).toFixed(1);

  return (
    <div className="p-4 bg-white rounded-xl shadow mb-4">
      <h4 className="text-lg font-semibold text-slate-700 mb-2">Voter Turnout</h4>
      <p className="text-3xl font-bold text-indigo-600">{percentage}%</p>
      <p className="text-sm text-slate-500">{votesCast} of {totalVoters} voters have voted</p>
    </div>
  );
}

// COMPONENT 2: Election Progress Card
function ElectionProgressCard() {
  const startDate = new Date('2025-07-20');
  const endDate = new Date('2025-07-30');
  const today = new Date();

  const totalDuration = endDate - startDate;
  const elapsed = today - startDate;
  const rawPercentage = (elapsed / totalDuration) * 100;
  const clampedPercentage = Math.max(0, Math.min(100, rawPercentage)).toFixed(1);

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h4 className="text-lg font-semibold text-slate-700 mb-2">Election Progress</h4>
      <p className="text-3xl font-bold text-green-600">{clampedPercentage}%</p>
      <p className="text-sm text-slate-500">From July 20 to July 30, 2025</p>
    </div>
  );
}

// MAIN CHART COMPONENT
function RevenueChart() {
  return (
    <div className='flex gap-4'>
      {/* Main Chart Container */}
      <div className='flex-1 p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 shadow-xl border border-slate-200 dark:border-slate-700 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <h3 className='text-xl font-bold text-slate-800 dark:text-white'>
              Live Vote Count Overview
            </h3>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              Real-Time insights into voting trends
            </p>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg'>
                <BarChart2 size={16} className='text-white' />
              </div>
              <div className='text-sm text-slate-800 dark:text-slate-400'>
                <span className='font-semibold'>Vote Count</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-60 bg-slate-100 dark:bg-slate-800 rounded-lg px-2 py-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
              <XAxis
                dataKey="name"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                stroke="#94a3b8"
                interval={0}
                angle={-15}
                textAnchor="end"
                height={40}
              >
                <Label value="Candidates" offset={-10} position="insideBottom" fill="#64748b" />
              </XAxis>
              <YAxis
                fontSize={10}
                tickLine={false}
                axisLine={false}
                stroke="#94a3b8"
              >
                <Label value="Vote Count" angle={-90} position="insideLeft" fill="#64748b" />
              </YAxis>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="votes" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Side Card with Voter Info */}
      <div className='h-83 w-80 rounded-2xl bg-white shadow-xl p-4 ml-4 flex flex-col justify-between'>
        <VoterTurnoutCard />
        <ElectionProgressCard />
      </div>
    </div>
  );
}

export default RevenueChart;
