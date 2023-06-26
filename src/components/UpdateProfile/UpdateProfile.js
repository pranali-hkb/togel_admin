import React from "react";
import profilestyle from "./UpdateProfile.module.css";
import loginusericon from "../../assets/images/profile/loginusericon.svg";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TWOD from "../../assets/images/UpdateProfileIcons/2D.svg";
import ThreeD from "../../assets/images/UpdateProfileIcons/3D.svg";
import gmailicon from "../../assets/images/UpdateProfileIcons/gmailicon.svg";
import phoneicon from "../../assets/images/UpdateProfileIcons/phoneicon.svg";
import profileicon from "../../assets/images/UpdateProfileIcons/profileicon.svg";
import worldicon from "../../assets/images/UpdateProfileIcons/worldicon.svg";
import yaunicon from "../../assets/images/UpdateProfileIcons/yaunicon.svg";
import { Box } from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const UpdateProfile = () => {
  return (
    <>
      <div className={profilestyle.outersec}>
        <div className={profilestyle.innerSec}>
          <div className={profilestyle.boxSec}>
            <div className={profilestyle.boxSecLeftsec}>
              <FormControl className={profilestyle.TextField}>
                <InputLabel className={profilestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={profileicon} width={15} /> Name
                  </span>
                </InputLabel>
                <OutlinedInput
                  size=""
                  className={profilestyle.loginbox}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  label="super Admin"
                />
              </FormControl>
              <FormControl className={profilestyle.TextField}>
                <InputLabel className={profilestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={profileicon} width={15} /> Name
                  </span>
                </InputLabel>
                <OutlinedInput
                  size=""
                  className={profilestyle.loginbox}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  label="super Admin"
                />
              </FormControl>
            </div>
            <div className={profilestyle.boxSecRightsec}>
              <FormControl className={profilestyle.TextField}>
                <InputLabel className={profilestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={profileicon} width={15} /> Name
                  </span>
                </InputLabel>
                <OutlinedInput
                  size=""
                  className={profilestyle.loginbox}
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  label="super Admin"
                />
              </FormControl>

              <div className={profilestyle.boxcontainer}>
                <div className={profilestyle.box1}>
                  <FormControl className={profilestyle.TextField}>
                    <InputLabel className={profilestyle.inputtxt}>
                      <span style={{ width: "10px", m: "2" }}>
                        <img src={profileicon} width={15} /> Name
                      </span>
                    </InputLabel>
                    <OutlinedInput
                      size=""
                      className={profilestyle.loginbox}
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      label="super Admin"
                    />
                  </FormControl>
                </div>
                <div className={profilestyle.box2}>
                  <FormControl className={profilestyle.TextField}>
                    <InputLabel className={profilestyle.inputtxt}>
                      <span style={{ width: "10px", m: "2" }}>
                        <img src={profileicon} width={15} /> Name
                      </span>
                    </InputLabel>
                    <OutlinedInput
                      size=""
                      className={profilestyle.loginbox}
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      label="super Admin"
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>

          {/* ******************************************************************* */}

          <div className={profilestyle.boxSec}>
            <div className={profilestyle.boxSecLeftsec}>
              <div className={profilestyle.btnSection}>
                <div className={profilestyle.btnSection1}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={TWOD} alt="" />
                  </Box>
                </div>
                <div className={profilestyle.btnSection2}>
                  <TextField
                    id="outlined-number"
                    label="Enter %"
                    //   type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className={profilestyle.btnSection3}>
                  <TextField
                    id="outlined-number"
                    label="Enter IDR"
                    //   type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={profilestyle.boxSecRightsec}>
              <div className={profilestyle.btnSection}>
                <div className={profilestyle.btnSection1}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                </div>
                <div className={profilestyle.btnSection2}>
                  <TextField
                    id="outlined-number"
                    label="Enter %"
                    //   type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <div className={profilestyle.btnSection3}>
                  <TextField
                    id="outlined-number"
                    label="Enter IDR"
                    //   type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ******************************************************************* */}
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
