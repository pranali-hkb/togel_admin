import React from "react";
import dashboardstyle from "./Dashboard.module.css";
import Typography from "@mui/material/Typography";
import MovingIcon from "@mui/icons-material/Moving";
function Dashboard() {
  return (
    <div className={dashboardstyle.mainsec}>
      <div className={dashboardstyle.innersection}>
        <div className={dashboardstyle.innerbox}>
          <div className={dashboardstyle.innercard1}>
            <Typography variant="h1">Super Master </Typography>
            <Typography variant="h2">No of Super Master </Typography>
            <Typography variant="h3">3 </Typography>
          </div>
        </div>

        <div className={dashboardstyle.innerbox}>
          <div className={dashboardstyle.innercard2}>
            <Typography variant="h1">Super Master </Typography>
            <Typography variant="h2">No of Super Master </Typography>
            <Typography variant="h3">3 </Typography>
          </div>
        </div>

        <div className={dashboardstyle.innerbox}>
          <div className={dashboardstyle.innercard3}>
            <Typography variant="h1">Super Master </Typography>
            <Typography variant="h2">No of Super Master </Typography>
            <Typography variant="h3">3 </Typography>
          </div>
        </div>
        
      </div>
    </div>

    
  );
}

export default Dashboard;
