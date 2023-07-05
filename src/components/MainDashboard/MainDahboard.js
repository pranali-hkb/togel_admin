import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import RecentUserTable from "../RecentUserTable/RecentUserTable";
import DashboardChart from "../DashboardChart.js/DashboardChart";
import DashbordCards from "../DashbordCards/DashbordCards";
import SampleDataTable from "../SampleDataTable/SampleDataTable";


function MainDahboard() {
  return (
    <div>
      <DashbordCards />
      <DashboardChart />
      <RecentUserTable />
{/* <SampleDataTable/> */}

    </div>
  );
}

export default MainDahboard;
