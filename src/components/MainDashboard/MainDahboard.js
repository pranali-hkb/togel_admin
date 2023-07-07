import React from "react";
import RecentUserTable from "../RecentUserTable/RecentUserTable";
import DashboardChart from "../DashboardChart.js/DashboardChart";
import DashbordCards from "../DashbordCards/DashbordCards";
import SampleDataTable from "../SampleDataTable/SampleDataTable";
import SampleTable from "../SampleDataTable/SampleTable";
import AddSuperMasterForm from "../AddSuperMasterForm/AddSuperMasterForm";
import { AppBar } from "@mui/material";

function MainDahboard() {
  return (
    <div>
      {/* <DashbordCards />
      <DashboardChart />
      <RecentUserTable />  */}
      {/* <SampleDataTable /> */}
      {/* <SampleTable/> */}
<AppBar/>
    <AddSuperMasterForm/>
    </div>
  );
}

export default MainDahboard;
