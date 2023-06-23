import React from "react";
import sucesstyle from "./Sucessfull.module.css";
import settingIcon from "../../assets/images/profile/successIcon.svg";
import closeIcon from "../../assets/images/profile/closeIcon.svg";
import { Typography } from "@mui/material";
const Sucessfull = () => {
  return (
    <>
      <div className={sucesstyle.maincontainer}>
        <div className={sucesstyle.inrcontainer}>
          <div className={sucesstyle.btnsection}>
            <img src={closeIcon} alt="" />
          </div>
          <div className={sucesstyle.settingsection}>
            <Typography className={sucesstyle.SetingMsg}>
              Super Master Added Successfully
            </Typography>
            <img src={settingIcon} alt="" style={{ paddingTop: "12%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sucessfull;
