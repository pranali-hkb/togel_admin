import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import appstyle from "./HomePage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import { styled, alpha } from "@mui/material/styles";
import { useState } from "react";
import { useRef } from "react";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import RoutesPages from "../../RoutesPages";
import userprofile from "../../assets/images//profile/userprofile.svg";
import dashboardprofile from "../../assets/images//profile/dashboardprofile.svg";
import supermasterprofile from "../../assets/images//profile/supermasterprofile.svg";
import masterprofile from "../../assets/images//profile/masterprofile.svg";
import agentprofile from "../../assets/images//profile/agentprofile.svg";
import reportprofile from "../../assets/images//profile/reportprofile.svg";
import logoutprofile from "../../assets/images//profile/logoutprofile.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Person2Rounded, ReportOffOutlined, Settings } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import { green } from "@mui/material/colors";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const drawerWidth = 280;

function HomePage(props) {
  //swipeableDreawer code
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const [openUser, setOpenUser] = useState(false);
  const userButtonRef = useRef();
  const [openSuperMaster, setOpenSuperMaster] = React.useState(false);
  const [openMaster, setOpenMaster] = React.useState(false);
  const [openAgent, setOpenAgent] = React.useState(false);
  const [openReports, setOpenReports] = React.useState(false);
  const [menuStates, setMenuStates] = React.useState({
    superMaster: false,
    master: false,
    // Add more menu items here
  });

  const handleMenuClick = (menuName) => {
    setMenuStates((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));


      // Close all other menus except the clicked one
  for (const key in menuStates) {
    if (key !== menuName) {
      setMenuStates((prevState) => ({
        ...prevState,
        [key]: false,
      }));
    }
  }
};
  const location = useLocation();
  const handleSuperMasterClick = () => {
    setOpenSuperMaster(!openSuperMaster);
  };

  const handleMasterClick = () => {
    setOpenMaster(!openMaster);
  };

  const handleAgentClick = () => {
    setOpenAgent(!openAgent);
  };
  const handleReportsClick = () => {
    setOpenReports(!openReports);
  };

  // active list item color
  const activeTab = (route) => {
    return {
      backgroundColor: "#1095FF", // Change this to the desired active tab color
    };
  };
  const [openContent, setOpenContent] = React.useState(true);

  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // icon on app bar start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  // search
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F2EDF3",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border: "1px solid #7B809A",
    height: "42px",
    color: "rgba(123, 128, 154, 1)",
    height: "42px",
    width: "173px",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "10ch",
      },
    },
  }));

  const drawer = (
    <div>
      <Toolbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
          }}
        >
          <ListItem
            disablePadding
            onClick={() => navigate("/maindashboard")}
            sx={{ pl: 4, pr: 4 }}
          >
            <ListItemButton sx={{ color: openUser ? "#fff" : "transparent" }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Avatar sx={{ backgroundColor: "#fff" }}>
                  <img src={userprofile} alt="" />
                </Avatar>
              </ListItemIcon>
              <ListItemText sx={{ color: "#fff" }}> Pranali Bos</ListItemText>
            </ListItemButton>
          </ListItem>
        </div>
      </div>
      <ListItem disablePadding sx={{ pt: 4 }}>
        <ListItemButton
          ref={userButtonRef}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },
          }}
          onClick={() => navigate("/dashboard")}
          selected={location.pathname === "/dashboard"}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <GridViewOutlinedIcon sx={{color:"#642483"}}></GridViewOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              WebkitTextFillColor:
                location.pathname === "/dashboard" ? "orange" : "#fff",
            }}
            className={appstyle.navtext}
          >
            Dashboard
          </ListItemText>
        </ListItemButton>
      </ListItem>
      {/* // **************SuperMaster Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          // onClick={handleSuperMasterClick}
          onClick={() => handleMenuClick("superMaster")}
          ref={userButtonRef}
          selected={menuStates.superMaster}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },

            backgroundColor: menuStates.superMaster ? "#642483" : "transparent",
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={supermasterprofile} alt="" /> */}
              <Person4OutlinedIcon sx={{color:"#642483"}}></Person4OutlinedIcon>
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
            sx={{
              display: "flex",
              justifyContent: "start",
              WebkitTextFillColor: menuStates.superMaster ? "orange" : "#fff",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Super Master
              {menuStates.superMaster ? (
              <KeyboardArrowDownIcon
                sx={{ ml: 4, color: menuStates.superMaster ? "orange" : "#fff" }}
              ></KeyboardArrowDownIcon>
              ) : (
              <KeyboardArrowRightIcon
                sx={{ ml: 4, color: menuStates.superMaster ? "orange" : "#fff" }}
              ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>

      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/usersupermaster")}
            selected={location.pathname === "/usersupermaster"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/usersupermaster" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <PersonIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/usersupermaster"
                      ? "orange"
                      : "#fff",
                }}
              ></PersonIcon>{" "}
              User Super Master
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/supermasterprofileupdate")}
            selected={location.pathname === "/supermasterprofileupdate"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/supermasterprofileupdate"
                    ? "orange"
                    : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <BadgeOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/supermasterprofileupdate"
                      ? "orange"
                      : "#fff",
                }}
              ></BadgeOutlinedIcon>{" "}
              Profile Update
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>


      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/gamelist")}
            selected={location.pathname === "/gamelist"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/gamelist" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <ReceiptOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/gamelist" ? "orange" : "#fff",
                }}
              ></ReceiptOutlinedIcon>{" "}
              Game List
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/gamesettting")}
            selected={location.pathname === "/gamesettting"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/gamesettting" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <SettingsIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/gamesettting" ? "orange" : "#fff",
                }}
              ></SettingsIcon>{" "}
              Game Settings
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* // **************SuperMaster End******************* */}

      {/* // **************Master Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
         onClick={() => handleMenuClick("master")}
          ref={userButtonRef}
          selected={menuStates.master}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },

            backgroundColor: menuStates.master ? "#642483" : "transparent",
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{backgroundColor:'#fff'}}>
              {/* <img src={masterprofile} alt="" /> */}
              <PersonOutlineOutlinedIcon sx={{color:"#642483"}}></PersonOutlineOutlinedIcon>

            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
            sx={{
              display: "flex",
              justifyContent: "start",
              WebkitTextFillColor: menuStates.master ? "orange" : "#fff",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Master
              {menuStates.master ? (
              <KeyboardArrowDownIcon
                sx={{ ml: 4, color: menuStates.master ? "orange" : "#fff" }}
              ></KeyboardArrowDownIcon>
              ) : (
              <KeyboardArrowRightIcon
                sx={{ ml: 4, color: menuStates.master ? "orange" : "#fff" }}
              ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStates.master} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/usersupermaster")}
            selected={location.pathname === "/usersupermaster"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/usersupermaster" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <PersonIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/usersupermaster"
                      ? "orange"
                      : "#fff",
                }}
              ></PersonIcon>{" "}
              User Master
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={menuStates.master} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/supermasterprofileupdate")}
            selected={location.pathname === "/supermasterprofileupdate"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/supermasterprofileupdate"
                    ? "orange"
                    : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <BadgeOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/supermasterprofileupdate"
                      ? "orange"
                      : "#fff",
                }}
              ></BadgeOutlinedIcon>{" "}
              Profile Update
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={menuStates.master} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/gamesettting")}
            selected={location.pathname === "/gamesettting"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/gamesettting" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <SettingsIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/gamesettting" ? "orange" : "#fff",
                }}
              ></SettingsIcon>{" "}
              Game Settings
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      {/* // **************Master End*******************


{/* // **************Agent Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => handleMenuClick("agent")}
          ref={userButtonRef}
          selected={menuStates.agent}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },

            backgroundColor: menuStates.agent ? "#642483" : "transparent",
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{backgroundColor:"#fff"}}>
              {/* <img src={agentprofile} alt="" /> */}
              <PeopleAltOutlinedIcon sx={{color:"#642483"}}></PeopleAltOutlinedIcon>
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
            sx={{
              display: "flex",
              justifyContent: "start",
              WebkitTextFillColor: menuStates.agent ? "orange" : "#fff",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Agent
              {menuStates.agent ? (
              <KeyboardArrowDownIcon
                sx={{ ml: 4, color: menuStates.agent ? "orange" : "#fff" }}
              ></KeyboardArrowDownIcon>
              ) : (
              <KeyboardArrowRightIcon
                sx={{ ml: 4, color: menuStates.agent ? "orange" : "#fff" }}
              ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStates.agent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/usersupermaster")}
            selected={location.pathname === "/usersupermaster"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/usersupermaster" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <PersonIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/usersupermaster"
                      ? "orange"
                      : "#fff",
                }}
              ></PersonIcon>{" "}
              User Agent
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={menuStates.agent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/supermasterprofileupdate")}
            selected={location.pathname === "/supermasterprofileupdate"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/supermasterprofileupdate"
                    ? "orange"
                    : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <BadgeOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/supermasterprofileupdate"
                      ? "orange"
                      : "#fff",
                }}
              ></BadgeOutlinedIcon>{" "}
              Profile Update
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      <Collapse in={menuStates.agent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/gamesettting")}
            selected={location.pathname === "/gamesettting"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/gamesettting" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <SettingsIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/gamesettting" ? "orange" : "#fff",
                }}
              ></SettingsIcon>{" "}
              Game Settings
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      {/* // **************Agent End******************* */}
      {/* // **************Reports ******************* */}
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => handleMenuClick("reports")}
          ref={userButtonRef}
          selected={menuStates.reports}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },

            backgroundColor: menuStates.reports ? "#642483" : "transparent",
          }}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={reportprofile} alt="" /> */}
              <SummarizeOutlinedIcon sx={{color:"#642483"}}></SummarizeOutlinedIcon>
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
            sx={{
              display: "flex",
              justifyContent: "start",
              WebkitTextFillColor: menuStates.reports ? "orange" : "#fff",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Reports
              {menuStates.reports ? (
              <KeyboardArrowDownIcon
                sx={{ ml: 4, color: menuStates.reports ? "orange" : "#fff" }}
              ></KeyboardArrowDownIcon>
              ) : (
              <KeyboardArrowRightIcon
                sx={{ ml: 4, color: menuStates.reports ? "orange" : "#fff" }}
              ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/turnoverreport")}
            selected={location.pathname === "/turnoverreport"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/turnoverreport" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <AssessmentOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/turnoverreport" ? "orange" : "#fff",
                }}
              ></AssessmentOutlinedIcon>{" "}
              TurnoverReport
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/winlossreport")}
            selected={location.pathname === "/winlossreport"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/winlossreport" ? "orange" : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <ReceiptOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/winlossreport" ? "orange" : "#fff",
                }}
              ></ReceiptOutlinedIcon>{" "}
              Win Loss Report
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            //  onClick={setHandleUserSuperMaster}
            ref={userButtonRef}
            // selected={openhandleUserSuperMaster}
            sx={{
              pl: 7,
              "&:hover": {
                backgroundColor: "#642483",
              },
              "&:focus": {
                backgroundColor: "#642483",
              },
            }}
            onClick={() => navigate("/transactionreport")}
            selected={location.pathname === "/transactionreport"}
          >
            <ListItemText
              sx={{
                WebkitTextFillColor:
                  location.pathname === "/transactionreport"
                    ? "orange"
                    : "#fff",
              }}
              className={appstyle.menunavtext}
            >
              <ReceiptLongOutlinedIcon
                sx={{
                  pt: 1,
                  color:
                    location.pathname === "/transactionreport"
                      ? "orange"
                      : "#fff",
                }}
              ></ReceiptLongOutlinedIcon>{" "}
              Transaction Report
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* ********************Logout start**************** */}

      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },
          }}
          onClick={() => navigate("/prediction")}
          selected={location.pathname === "/prediction"}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <BatchPredictionOutlinedIcon  sx={{color:"#642483"}}></BatchPredictionOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              WebkitTextFillColor:
                location.pathname === "/prediction" ? "orange" : "#fff",
            }}
            className={appstyle.navtext}
          >
          Prediction 
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          sx={{
            "&:hover": {
              backgroundColor: "#642483",
              color: "#642483",
            },
            "&:focus": {
              backgroundColor: "#642483",
              color: "#642483",
            },
          }}
          onClick={() => navigate("/logout")}
          selected={location.pathname === "/logout"}
        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <ExitToAppOutlinedIcon sx={{color:"#642483"}}></ExitToAppOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              WebkitTextFillColor:
                location.pathname === "/logout" ? "orange" : "#fff",
            }}
            className={appstyle.navtext}
          >
            Logout
          </ListItemText>
        </ListItemButton>
      </ListItem>


     



      <Divider sx={{ borderColor: "#fff", mt: 5 }}></Divider>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#f5f5f5" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          border: "none",
        }}
      >
        <Toolbar
          sx={{ backgroundColor: "#f5f5f5", boxShadow: "none", border: "none" }}
        >
          {/* for mobile */}
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* icon on app bar */}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", marginTop: "30px" } }}>
            <Search className={appstyle.search}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                className={appstyle.searchtxt}
                placeholder="Search…"
                height="42px"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="warning">
                <Settings />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="warning">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <Menu
              sx={{ color: "green" }}
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              id={mobileMenuId}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isMobileMenuOpen}
              onClose={handleMobileMenuClose}
            >
              {/* menuitem code for mobile */}
              <MenuItem>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <p>Messages1</p>
              </MenuItem>
              <MenuItem>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>Notifications</p>
              </MenuItem>
              <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <p>Profile</p>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>

          {/*  */}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
            // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "linear-gradient(180deg, #3E3D45 0%, #202020 100%)",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "linear-gradient(180deg, #3E3D45 0%, #202020 100%)",
              color: "#fff",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 4,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <RoutesPages />
      </Box>
    </Box>
  );
}

HomePage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomePage;
