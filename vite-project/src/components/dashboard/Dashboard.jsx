import React from 'react'
import StatsGrid from './StatsGrid';
import ChartSection from './ChartSection';

function Dashboard() {
  return (
    <div className='space-y-6'>
        {/* stats Grid */}
        <StatsGrid />

        {/* Chart Section */}
        <ChartSection />

    </div>
  )
}

export default Dashboard