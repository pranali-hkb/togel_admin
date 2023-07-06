import React from "react";
import CardStyles from "./DashbordCards.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import superMasterIcon from "../../assets/images//profile/master-icon.png";
import masterIcon from "../../assets/images//profile/mastericon.png";
import userIcon from "../../assets/images//profile/user.png";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "../../config";

const DashbordCards = () => {
    //-------------- states-----------------------//
    const [supermastercount  , setSuperMasterCount] = useState([]);
    const [mastercount  , setMasterCount] = useState([]);
    const [agentcount  , setAgentCount] = useState([]);
    //-----------------Get API---------------------//
  
    const getsupermastercount = async () => {
  
      try {
        const  accessToken = localStorage.getItem('user-token');
        console.log("accessToken",accessToken)
        if(accessToken){
          const response = await axios.get(
            `${config.serverUrl}/admin/dashboard/super-master-count`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );
          console.log("response=>", response.data);
          setSuperMasterCount(response.data.data);
        }
      } catch (e) {
        console.log("error=>", e);
      }
    };
  console.log("supermastercount",supermastercount)
    useEffect(() => {
      getsupermastercount();
    }, []);

    //----------------- master count api Get API---------------------//
  
    const getmastercount = async () => {
  
      try {
        const  accessToken = localStorage.getItem('user-token');
        console.log("accessToken",accessToken)
        if(accessToken){
          const response = await axios.get(
            `${config.serverUrl}/admin/dashboard/master-count`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );
          console.log("response=>", response.data);
          setMasterCount(response.data.data);
        }
      } catch (e) {
        console.log("error=>", e);
      }
    };
  console.log("mastercount",supermastercount)
    useEffect(() => {
      getmastercount();
    }, []);
    //-----------------Agent count API---------------------//
  
    const getagentcount = async () => {
  
      try {
        const  accessToken = localStorage.getItem('user-token');
        console.log("accessToken",accessToken)
        if(accessToken){
          const response = await axios.get(
            `${config.serverUrl}/admin/dashboard/agent-count`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );
          console.log("response=>", response.data);
          setAgentCount(response.data.data);
        }
      } catch (e) {
        console.log("error=>", e);
      }
    };
  console.log("agentcount",agentcount)
    useEffect(() => {
      getagentcount();
    }, []);

  return (
    <>
      <div className={CardStyles.maincardsec}>
        <div className={CardStyles.maincardinsec}>
          <div className={CardStyles.cardsec}>
            <Card className={CardStyles.cardbg1}>
              <CardContent>
                <Typography className={CardStyles.cardheading} >
                  Super Master
                </Typography>
                <Typography className={CardStyles.subhead} >
                  No of Super Master
                </Typography>
                <Typography className={CardStyles.counterhead} >{supermastercount}</Typography>
              </CardContent>
            </Card>
            {/* <Box className={CardStyles.supermastericon}>
              <img
                src={superMasterIcon}
                alt="superMasterIcon"
                style={{ width: "37px" }}
              />
            </Box> */}
          </div>
          <div className={CardStyles.cardsec}>
            <Card className={CardStyles.cardbg2}>
              <CardContent>
                <Typography className={CardStyles.cardheading} >
                  Master
                </Typography>
                <Typography className={CardStyles.subhead}>
                  No of Master
                </Typography>
                <Typography className={CardStyles.counterhead}>{mastercount}</Typography>
              </CardContent>
            </Card>
            {/* <Box className={CardStyles.mastericon}>
              <img
                src={masterIcon}
                alt="masterIcon"
                style={{ width: "37px" }}
              />
            </Box> */}
          </div>
          <div className={CardStyles.cardsec}>
            <Card className={CardStyles.cardbg3}>
              <CardContent>
                <Typography className={CardStyles.cardheading}>User</Typography>
                <Typography className={CardStyles.subhead}>
                  No of User
                </Typography>
                <Typography className={CardStyles.counterhead}>{agentcount}</Typography>
              </CardContent>
            </Card>
            {/* <Box className={CardStyles.usericon}>
              <img
                src={userIcon}
                alt="superMasterIcon"
                style={{ width: "37px" }}
              />
            </Box> */}
          </div>
        </div>
      
      </div>
    </>
  );
};


export default DashbordCards;
