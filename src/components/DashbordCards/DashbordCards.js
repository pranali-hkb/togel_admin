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
import { useContext } from "react";
// import TokenContext from "../../TokenContext";

import {TokenContext,AdminDataContext} from '../../App'

const DashbordCards = () => {
  const  accessToken = localStorage.getItem('user-token');
  // const accessToken =useContext(TokenContext);
  // const adminInfo =useContext(AdminDataContext);
  console.log("accessToken dash=>",accessToken)
  // console.log("adminInfo=>",adminInfo)
  // console.log("admincode=>",adminInfo.admincode)
    //-------------- states-----------------------//
    const [supermastercount  , setSuperMasterCount] = useState([]);
    const [mastercount  , setMasterCount] = useState([]);
    const [agentcount  , setAgentCount] = useState([]);
    //-----------------Get API---------------------//
  
    const getsupermastercount = async () => {
  
      try {
        
        if(accessToken){
          const response = await axios.get(
            `${config.serverUrl}/admin/dashboard/super-master-count`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`
              }
            }
          );
          console.log("response =>", response.data);
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
  console.log("mastercount",mastercount)
    useEffect(() => {
      getmastercount();
    }, []);
    //-----------------Agent count API---------------------//
  
    const getagentcount = async () => {
  
      try {
        
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
                Total Number Of Super Masters
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
                Total Number Of Masters
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
                <Typography className={CardStyles.cardheading}>Agent</Typography>
                <Typography className={CardStyles.subhead}>
                Total Number Of Agents
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
