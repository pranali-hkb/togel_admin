import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import RecentUserTable from '../RecentUserTable/RecentUserTable'
import DashboardChart from '../DashboardChart.js/DashboardChart'


function MainDahboard() {
  return (
    <div>

     <Dashboard/> 
 <DashboardChart/>
     <RecentUserTable/> 
    </div>
  )
}

export default MainDahboard
