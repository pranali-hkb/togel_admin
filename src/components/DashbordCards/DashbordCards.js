import React from "react";
import CardStyles from "./DashbordCards.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import superMasterIcon from "../../assets/images//profile/master-icon.png";
import masterIcon from "../../assets/images//profile/mastericon.png";
import userIcon from "../../assets/images//profile/user.png";
const DashbordCards = () => {
  return (
    <>
      <div className={CardStyles.maincardsec}>
        <div className={CardStyles.maincardinsec}>
          <div className={CardStyles.cardsec}>
            <Card className={CardStyles.cardbg1}>
              <CardContent>
                <Typography className={CardStyles.cardheading}>
                  Master
                </Typography>
                <Typography className={CardStyles.subhead}>
                  No of Master
                </Typography>
                <Typography className={CardStyles.counterhead}>21</Typography>
              </CardContent>
            </Card>
            <Box className={CardStyles.supermastericon}>
              <img
                src={superMasterIcon}
                alt="superMasterIcon"
                style={{ width: "37px" }}
              />
            </Box>
          </div>
          <div className={CardStyles.cardsec}>
            <Card className={CardStyles.cardbg2}>
              <CardContent>
                <Typography className={CardStyles.cardheading}>
                  Master
                </Typography>
                <Typography className={CardStyles.subhead}>
                  No of Master
                </Typography>
                <Typography className={CardStyles.counterhead}>21</Typography>
              </CardContent>
            </Card>
            <Box className={CardStyles.mastericon}>
              <img
                src={masterIcon}
                alt="masterIcon"
                style={{ width: "37px" }}
              />
            </Box>
          </div>
          <div className={CardStyles.cardsec}>
            <Card className={CardStyles.cardbg3}>
              <CardContent>
                <Typography className={CardStyles.cardheading}>User</Typography>
                <Typography className={CardStyles.subhead}>
                  No of User
                </Typography>
                <Typography className={CardStyles.counterhead}>21</Typography>
              </CardContent>
            </Card>
            <Box className={CardStyles.usericon}>
              <img
                src={userIcon}
                alt="superMasterIcon"
                style={{ width: "37px" }}
              />
            </Box>
          </div>
        </div>
      
      </div>
    </>
  );
};


export default DashbordCards;
