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
import { Box, Typography } from "@mui/material";
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
                
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  label="Name"
                />
              </FormControl>
              <FormControl
                className={profilestyle.TextField}
                sx={{ marginTop: "4%" }}
              >
                <InputLabel className={profilestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={phoneicon} width={15} /> Phone
                  </span>
                </InputLabel>
                <OutlinedInput
                  size=""
                
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  label="Phone"
                />
              </FormControl>
            </div>
            <div className={profilestyle.boxSecRightsec}>
              <FormControl className={profilestyle.TextField}>
                <InputLabel className={profilestyle.inputtxt}>
                  <span style={{ width: "10px", m: "2" }}>
                    <img src={gmailicon} width={15} /> Email
                  </span>
                </InputLabel>
                <OutlinedInput
                  size=""
                
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                />
              </FormControl>

              <div className={profilestyle.boxcontainer}>
                <div className={profilestyle.box1}>
                  <FormControl className={profilestyle.TextField}>
                    <InputLabel className={profilestyle.inputtxt}>
                      <span style={{ width: "10px", m: "2" }}>
                        <img src={worldicon} width={15} /> City
                      </span>
                    </InputLabel>
                    <OutlinedInput
                      size=""
                    
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      label="City"
                    />
                  </FormControl>
                </div>
                <div className={profilestyle.box2}>
                  <FormControl className={profilestyle.TextField}>
                    <InputLabel className={profilestyle.inputtxt}>
                      <span style={{ width: "10px", m: "2" }}>
                        <img src={yaunicon} width={15} /> Country
                      </span>
                    </InputLabel>
                    <OutlinedInput
                    
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      label="Country"
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
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "4px",
                      marginTop: {
                        xs: "10px",      
                        sm: "20px",      
                        md: "5px",     
                        lg: "20px",      
                         
                      }, 
                 
                      background:
                      "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <img src={TWOD} alt="" style={{width:'25px'}} />
                  </Box>
                 <Typography sx={{paddingTop:'4px',color:'#924ac2'}}> 2D</Typography>
                </div>
                <div className={profilestyle.btnSection2}>
                  <TextField
                    id="outlined-number"
                    label="Enter %"
                    size="small"
                    //   type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#441a61",
                        fontweight: "600",
                      },
                    }}
                  />
                </div>
                <div className={profilestyle.btnSection3}>
                  <TextField
                    id="outlined-number"
                    label="Enter IDR"
                    size="small"
                    //   type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#441a61",
                        fontweight: "600",
                      },
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
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "4px",
                      marginTop: {
                        xs: "10px",      
                        sm: "20px",      
                        md: "5px",     
                        lg: "20px",      
                         
                      }, 
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <img src={ThreeD} alt=""  style={{width:'25px'}}  />
                  </Box>
                  <Typography sx={{paddingTop:'4px',color:'#924ac2'}}> 3D</Typography>
                </div>
                <div className={profilestyle.btnSection2}>
                  <TextField
                    id="outlined-number"
                    label="Enter %"
                    size="small"
                    //   type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#441a61",
                        fontweight: "600",
                      },
                    }}
                  />
                </div>
                <div className={profilestyle.btnSection3}>
                  <TextField
                    id="outlined-number"
                    label="Enter IDR"
                    size="small"
                    //   type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#441a61",
                        fontweight: "600",
                      },
                    }}
                  />
                </div>
              </div>

              {/* btn start */}

              <div className={profilestyle.buttonsec}>
                <div className={profilestyle.resetbtn}>
                  {" "}
                  <Button variant="contained" sx={{width:"150px", backgroundColor:"red"}}>Reset</Button>
                </div>
                <div className={profilestyle.savebtn}>
                  {" "}
                  <Button variant="contained" sx={{width:"150px", backgroundColor:"blue"}}>Save</Button>
                </div>
              </div>

              {/* btn end */}
            </div>
          </div>

          {/* ******************************************************************* */}
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
