import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import RecentUserTable from '../RecentUserTable/RecentUserTable'
import DashboardChart from '../DashboardChart.js/DashboardChart'
// import RecentUserTable2 from '../RecentUserTable2/RecentUserTable2'


function MainDahboard() {
  return (
    <div>

     <Dashboard/> 
  
 <DashboardChart/>
     <RecentUserTable/> 
     {/* <RecentUserTable2 /> */}
    </div>
  )
}

export default MainDahboard
