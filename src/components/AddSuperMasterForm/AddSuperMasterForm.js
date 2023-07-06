import React from "react";
import formstyles from "./AddSuperMasterForm.module.css";
import Input from "@mui/joy/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box } from "@mui/material";

const AddSuperMasterForm = () => {
  return (
    <>
      <Box className={formstyles.maincontainer}>
      
          <Typography className={formstyles.heading} sx={{ textAlign: "left" }}>
            Add Super Master
          </Typography>
     

        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            {/* 1 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Name"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>

            {/* 2 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Usercode"
                placeholder="Usercode"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>
            {/* 3 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Password"
                placeholder="Password"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>

            {/* 4 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Confirm Password"
                placeholder="Confirm Password"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>
            {/* 5 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Nick Name"
                placeholder="Nick Name"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>
            {/* 6 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Email"
                placeholder="Email"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>
          </div>
          <div className={formstyles.sectionright}>
            {/* 1 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Phone No"
                placeholder="Phone No"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>

            {/* 2 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Account Number"
                placeholder="Account Number"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>
            {/* 3 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Account Name"
                placeholder="Account Name"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>

            {/* 4 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Bank Name"
                placeholder="Bank Name"
                size="medium"
                fullWidth
                required
                color="warning"
              />
            </div>
            {/* 5 */}
            <div className={formstyles.innersection}>
              <TextField
                id="outlined-textarea"
                label="Division"
                placeholder="Division"
                size="medium"
                fullWidth
                color="warning"
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <Button variant="contained" size="large" sx={{ width: "200px" }}>
            Submit
          </Button>{" "}
        </div>
      </Box>
    </>
  );
};

export default AddSuperMasterForm;
