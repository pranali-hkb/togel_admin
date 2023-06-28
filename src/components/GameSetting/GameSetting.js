import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import gamestyle from "./GameSetting.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ThreeD from "../../assets/images/UpdateProfileIcons/3D.svg";
import TextField from "@mui/material/TextField";
const GameSetting = () => {
  const [type, setType] = useState("2D");
  const [activeStatus, setActiveStatus] = useState("ALL");
  const handleChange = (event) => {
    setActiveStatus(event.target.value);
  };
  console.log("type=>", type);
  return (
    <>
      <Box>
        <div className={gamestyle.Container}>
          <h3 className={gamestyle.txtHeader}>
            Game Setting (Discount & Prize)
          </h3>
            <div>
              <FormControl sx={{ minWidth: 300 }}>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  size="small"
                  value={activeStatus}
                  onChange={handleChange}
                  // autoWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  
                  <MenuItem value="ALL">All</MenuItem>
                  <MenuItem value="TRUE">User1</MenuItem>
                  <MenuItem value="FALSE">User2</MenuItem>
                </Select>
              </FormControl>
            </div>
          <div className={gamestyle.ParentContainer}>
            <div className={gamestyle.leftContainer}>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <FormControlLabel
                        value="2D"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    2D
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <FormControlLabel
                        value="3D"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    3D
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="4D"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    4D
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="ODD"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Odd
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="EVEN"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Even
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="FREE_BET"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Free Bet
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="FREE_BET2D"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Free Bet 2D
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={gamestyle.rightContainer}>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="BIG"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Big
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                        "@media (max-width: 1024px)": {
                          // Adjust the font size for screen width up to 400px
                          fontSize: "10px",
                        },
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="SMALL"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Small
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
              <div className={gamestyle.btnRadioSection}>
                <div className={gamestyle.btnRadio}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={type}
                      onChange={(e) => setType(e.currentTarget.value)}
                    >
                      <FormControlLabel
                        value="ZODIAC"
                        control={<Radio />}
                        // label="Female"
                      />
                      {/* <FormControlLabel
                    value="male"
                    control={<Radio />}
                    // label="Male"
                  /> */}
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className={gamestyle.imageSection}>
                  <Box
                    sx={{
                      borderRadius: "12px",
                      backgroundColor: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "8px",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      marginTop: "30px",
                    }}
                  >
                    <img src={ThreeD} alt="" />
                  </Box>
                  <Typography className={gamestyle.dimentionSection}>
                    Zodiac
                  </Typography>
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Discount(%)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#fff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
                <div className={gamestyle.txtField}>
                  <TextField
                    id="outlined-search"
                    label="Enter Prize (Rs)"
                    type="search"
                    size="small"
                    sx={{
                      bgcolor: "#ffffff", // Customize the background color
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        color: "#924AC2 ",
                        // fontWeight:"600"
                      },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
export default GameSetting;
