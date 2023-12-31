import React from "react";
import formstyles from "./AddSuperMaster.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography, Box, Badge } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";
import { useContext } from "react";
import { TokenContext, AdminDataContext } from "../../App";
import Swal from "sweetalert2";

const AddSuperMaster = () => {
  const  accessToken = localStorage.getItem('user-token');
  const adminDataString  = localStorage.getItem("user-info");

  console.log("adminDataString=>", JSON.stringify(adminDataString));
  const adminInfo = JSON.parse(adminDataString);
  //-------------------------------useContext -------------------------//

  // const accessToken = useContext(TokenContext);
  // const adminInfo = useContext(AdminDataContext);
  console.log("accessToken11=>", accessToken);
  console.log("adminInfo=>", adminInfo);
  // console.log("adminInfo code=>", adminInfo.admincode);
 
  // let adminroleId = adminInfo.adminroleid;
  // let adminCode = adminInfo.admincode;
  // let adminType = adminInfo.admintype;
  // let adminuserId = adminInfo.adminuserid;
  // let adminUsername = adminInfo.adminusername;
  // let adminName = adminInfo.name;
  // let adminRole = adminInfo.roleName;
  // let adminId = adminInfo.id;
  // let adminEmail = adminInfo.email;
  // let adminIs_admin = adminInfo.is_admin;
  //------------------------------------States-----------------------------//
  const [superMasterName, setSuperMasterName] = useState("");
  const [superMasterUserName, setSuperMasterUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [superMasterCode, setSuperMasterCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [superMasterPassword, setSuperMasterPassword] = useState("");
  const [accountName, setAccountName] = useState("");
  const [superMasterConfirmPassword, setSuperMasterConfirmPassword] =
    useState("");
  const [bankName, setBankName] = useState("");
  const [nickName, setNickName] = useState("");
  const [division, setDivision] = useState("");
  const [superMasterEmail, setSuperMasterEmail] = useState("");

  // --------------------------  POST API START--------------------------------------------//

  const addSuperMasterData = () => {
    // if (
    //   superMasterName != "" &&
    //   phoneNo != "" &&
    //   superMasterUserName != "" &&
    //   superMasterCode != "" &&
    //   accountNumber != "" &&
    //   superMasterPassword != "" &&
    //   superMasterConfirmPassword != "" &&
    //   accountName != "" &&
    //   bankName != "" &&
    //   nickName != "" &&
    //   superMasterEmail != " "
    // ) {
    //   if (superMasterPassword === superMasterConfirmPassword) {
        sendData();
    //   } else {
    //     Swal.fire("Password and confirm Password do not match! ", "", "error");
    //   }
    // } else {
    //   Swal.fire("Please fill All Fields! ", "", "warning");
    // }
  };

  const sendData = () => {
    const data = {
      name: superMasterName,
      email: superMasterEmail,
      password: superMasterPassword,
      username: superMasterUserName,
      contact_number: phoneNo,
      nikname: nickName,
      account_no: accountNumber,
      account_name: accountName,
      bank_name: bankName,
      division: division,
      role_id: 1,
      // code: `${adminCode}${superMasterCode}`,
      type: "AdminMaster",
      // user_id: parseInt(adminuserId),
    };
    console.log("save data==>", data);
    console.log("save data==>", JSON.stringify(data));
    axios
      .post(`${config.serverUrl}/admin/user/super-master/store`, data)
      .then(function (response) {
        console.log("response =>", response);
        Swal.fire("Super Master Added Successfully!", "", "success");
      })
      .catch(function (error) {
        Swal.fire(error.response.statusText, "", "warning");
        console.log("error=>", error);
      });
  };

  return (
    <>
      <Box className={formstyles.maincontainer}>
        {/* heading1 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <Typography className={formstyles.heading}>
              Add Super Master
            </Typography>
          </div>
          <div className={formstyles.sectionright}>
            <Typography className={formstyles.code}>
              Admin Code:
              <span className={formstyles.badgeCode}>
                <Badge
                  color="success"
                  // badgeContent={adminCode}
                  max={99}
                ></Badge>
              </span>
            </Typography>
          </div>
        </div>
        {/* 1 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <TextField
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              size="medium"
              fullWidth
              required
              value={superMasterName}
              onChange={(e) => setSuperMasterName(e.target.value)}
              // change placeholder css
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 50, // Maximum allowed characters
              }}
            />
          </div>
          <div className={formstyles.sectionright}>
            <TextField
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              size="medium"
              fullWidth
              required
              value={superMasterEmail}
              onChange={(e) => setSuperMasterEmail(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              // inputProps={{
              //   maxLength: 30, // Maximum allowed characters
              // }}
            />
          </div>
        </div>

        {/* 2 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <TextField
              id="outlined-textarea"
              label="Usercode"
              placeholder="Usercode"
              size="medium"
              fullWidth
              required
              value={superMasterCode}
              onChange={(e) => setSuperMasterCode(e.target.value.toUpperCase())}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 2, // Maximum allowed characters
              }}
            />
          </div>
          <div className={formstyles.sectionright}>
            <TextField
              id="outlined-textarea"
              label="Phone No"
              placeholder="Phone No"
              size="medium"
              fullWidth
              required
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 10, // Maximum allowed characters
              }}
            />
          </div>
        </div>

        {/* 3 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <TextField
              id="outlined-textarea"
              label="Username"
              placeholder="Username"
              size="medium"
              fullWidth
              required
              value={superMasterUserName}
              onChange={(e) => setSuperMasterUserName(e.target.value)}
              // change placeholder css
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 50, // Maximum allowed characters
              }}
            />
          </div>
          <div className={formstyles.sectionright}>
            <TextField
              id="outlined-textarea"
              label="Password"
              placeholder="Password"
              size="medium"
              fullWidth
              required
              value={superMasterPassword}
              onChange={(e) => setSuperMasterPassword(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 15, // Maximum allowed characters
              }}
            />
          </div>
        </div>

        {/* 4 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <TextField
              id="outlined-textarea"
              label="Confirm Password"
              placeholder="Confirm Password"
              size="medium"
              fullWidth
              required
              value={superMasterConfirmPassword}
              onChange={(e) => setSuperMasterConfirmPassword(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 15, // Maximum allowed characters
              }}
            />
          </div>
          <div className={formstyles.sectionright}>
            <TextField
              id="outlined-textarea"
              label="Bank Name"
              placeholder="Bank Name"
              size="medium"
              fullWidth
              required
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 50, // Maximum allowed characters
              }}
            />
          </div>
        </div>

        {/* 5 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <TextField
              id="outlined-textarea"
              label="Account Number"
              placeholder="Account Number"
              size="medium"
              fullWidth
              required
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 50, // Maximum allowed characters
              }}
            />
          </div>
          <div className={formstyles.sectionright}>
            <TextField
              id="outlined-textarea"
              label="Account Name"
              placeholder="Account Name"
              size="medium"
              fullWidth
              required
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 50, // Maximum allowed characters
              }}
            />
          </div>
        </div>

        {/* 6 */}
        <div className={formstyles.container}>
          <div className={formstyles.sectionleft}>
            <TextField
              id="outlined-textarea"
              label="Nick Name"
              placeholder="Nick Name"
              size="medium"
              fullWidth
              required
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 15, // Maximum allowed characters
              }}
            />
          </div>
          <div className={formstyles.sectionright}>
            <TextField
              id="outlined-textarea"
              label="Division"
              placeholder="Division"
              size="medium"
              fullWidth
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              // change placeholder font
              InputProps={{
                style: { fontSize: "14px" },
              }}
              inputProps={{
                maxLength: 10, // Maximum allowed characters
              }}
            />
          </div>
        </div>
        <Button
          variant="contained"
          onClick={addSuperMasterData}
          size="large"
          sx={{ width: "200px" }}
          className={formstyles.formbtn}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default AddSuperMaster;
