import React from "react";
import cardstyle from "./Dashboard.module.css";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { radioClasses } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import superMasterIcon from "../../assets/images//profile/master-icon.png";
import masterIcon from "../../assets/images//profile/mastericon.png";
import userIcon from "../../assets/images//profile/user.png";
import { Height, Translate } from "@mui/icons-material";

function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1, marginTop: "2%" }}>
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item sm={12} xs={12} md={4} sx={{ boxShadow: "none" , position:"relative"}}>
            {/* <Item> */}
            <Card className={cardstyle.cardbg1} sx={{ maxWidth: 350 }} >
              <CardContent>
                <Typography className={cardstyle.cardheading}>
                  Super Master
                </Typography>
                <Typography className={cardstyle.subhead}>
                  No of Super Master
                </Typography>
                <Typography className={cardstyle.counterhead}>3 </Typography>
              </CardContent>
            </Card>

            {/* </Item> */}

            <Box
              sx={{
                width: "55px",
                height: "55px",
                borderRadius: "12px",
                background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                position: "absolute",
                left: "50%",
                top: "calc(0px + 32px)",
                transform: "translate(-50%,-50%)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={superMasterIcon}
                alt="superMasterIcon"
                style={{ width: "37px" }}
              />
            </Box>
          </Grid>
          <Grid item sm={12} xs={12} md={4} sx={{ position: "relative" }}>
            {/* <Item> */}
            <Card sx={{ maxWidth: 350 }} className={cardstyle.cardbg2} >
              <CardContent>
                <Typography className={cardstyle.cardheading}>
                  Master
                </Typography>
                <Typography className={cardstyle.subhead}>
                  No of Master
                </Typography>
                <Typography className={cardstyle.counterhead}>21</Typography>
              </CardContent>
            </Card>
            {/* </Item> */}
            <Box
              sx={{
                width: "55px",
                height: "55px",
                borderRadius: "12px",
                background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                position: "absolute",
                left: "50%",
                top: "calc(0px + 32px)",
                transform: "translate(-50%,-50%)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={masterIcon}
                alt="masterIcon"
                style={{ width: "37px" }}
              />
            </Box>
          </Grid>

          <Grid item sm={12} xs={12} md={4} sx={{ position: "relative" }}>
            {/* <Item> */}
            <Card className={cardstyle.cardbg3} sx={{ maxWidth: 350 }} >
              <CardContent>
                <Typography className={cardstyle.cardheading}>Agent</Typography>
                <Typography className={cardstyle.subhead}>
                  No of Agent
                </Typography>
                <Typography className={cardstyle.counterhead}>600</Typography>
              </CardContent>
            </Card>
            {/* </Item> */}
            <Box
              sx={{
                width: "55px",
                height: "55px",
                borderRadius: "12px",
                background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                position: "absolute",
                left: "50%",
                top: "calc(0px + 32px)",
                transform: "translate(-50%,-50%)",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={userIcon}
                alt="superMasterIcon"
                style={{ width: "37px" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;
