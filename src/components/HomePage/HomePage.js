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
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import indo from "../../assets/images/profile/id.jpg";
import eng from "../../assets/images/profile/en.jpg";
import Indo from "../../assets/images/profile/id.jpg";
import Eng from "../../assets/images/profile/en.jpg";
import {
  ListAltOutlined,
  Person2Rounded,
  ReportOffOutlined,
  Settings,
} from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from "react-router-dom";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import { green } from "@mui/material/colors";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BatchPredictionOutlinedIcon from "@mui/icons-material/BatchPredictionOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Logout from "../Logout/Logout";
import hkblogo from "../../assets/images/Logo/HKBGamingLogo.svg";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Popover from "@mui/material/Popover";
import { FormControl, Select, Typography } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
// new added icons
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import EditNoteIcon from '@mui/icons-material/EditNote';
import LogoutIcon from '@mui/icons-material/Logout';
// new added icons end
// css for language dropdown for border none
const CustomSelect = muiStyled(Select)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

const drawerWidth = 265;

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

  const [menuStates, setMenuStates] = React.useState({
    home: false,
    user: false,
    superMaster: false,
    calculation: false,
    prediction: false,
    logs: false,
    logout: false,
    // Add more menu items here
  });

  const handleMenuClick = (menuName) => {
    console.log("menustate =>", menuName);
    if (menuName == "home") {
      navigate("/maindashboard");
    }
    if (menuName == "calculation") {
      navigate("/calculation");
    }
    if (menuName == "prediction") {
      navigate("/prediction");
    }
    if (menuName == "logs") {
      navigate("/logs");
    }
    setMenuStates((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
    // console.log("useRef",userButtonRef.current.style.color="red");

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
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchornotification, setAnchorNotification] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isProfileMenuOpen = Boolean(anchorEl);
  const isLangMenuOpen = Boolean(anchorE2);
  // const isNotificationMenuOpen = Boolean(anchornotification);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const id = open ? 'notification-popover' : undefined;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLangMenuOpen = (event) => {
    setAnchorE2(event.currentTarget);
  };
  ////////////////////////////////////
  const handleClick = (event) => {
    setAnchorNotification(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorNotification(null);
  };
  const open = Boolean(anchornotification);
  const id = open ? "notification-popover" : undefined;

  // //////////////////////////

  const handleMenuClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
    setAnchorNotification(null);
    handleMobileMenuClose();
  };

  const handleLogout = () => {
    console.log("logout click");
    localStorage.removeItem("user-token");
    // const navigate = useNavigate();
    // navigate('/logout');
  };

  // for mobile
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const profilemenu = "primary-search-account-menu";
  const renderProfileMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={profilemenu}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: "40px" }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const options = [
    { value: "ID", label: "Indonesia", icon: <GTranslateIcon sx={{color:"#667085"}}/> },
    { value: "ENG", label: "English", icon: <GTranslateIcon sx={{color:"#667085"}} /> },
  ];

  const [selectedOption, setSelectedOption] = useState("ENG");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // console.log('selectedOption',selectedOption)
  const langmenu = "primary-search-account-menu";
  const renderLangMenu = (
    <Menu
      anchorEl={anchorE2}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={langmenu}
      keepMounted
      transformOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      open={isLangMenuOpen}
      onClose={handleMenuClose}
      style={{ marginTop: "40px" }}
    >
      <MenuItem onClick={handleMenuClose} sx={{ marginBottom: "10px" }}>
        <img src={indo} alt="" width={30} />
        <span className={appstyle.flagsection}>Indonesia</span>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <img src={eng} alt="" width={30} />

        <span className={appstyle.flagsection}>English</span>
      </MenuItem>
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";

  // search
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
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
        width: "70ch",
      },
    },
  }));
  const drawer = (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
        // style={{
        //   borderTop: "1px solid #038fdd",
        //   borderBottom: "1px solid #038fdd",
        // }}
        >
          <ListItem
            disablePadding
            onClick={() => navigate("/maindashboard")}
            sx={{ pl: 4, pr: 4 }}
          >
            <ListItemButton
              sx={{ color: openUser ? "#038fdd" : "transparent" }}
            >
              <ListItemIcon sx={{ color: "white" }}>
                {/* <Avatar sx={{ backgroundColor: "#fff" }}> */}
                <img src={hkblogo} alt="" width={120} />
                {/* </Avatar> */}
              </ListItemIcon>
              {/* <ListItemText sx={{ color: "#fff" }}> Pranali Bos</ListItemText> */}
            </ListItemButton>
          </ListItem>
        </div>
      </div>
      {/* <Toolbar /> */}

      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          onClick={() => handleMenuClick("home")}
          selected={menuStates.home}
          sx={{
            margin: "2% 4% 2%  4%",
            fontSize: "12px",
            WebkitTextFillColor: menuStates.home ? "#005CAC" : "#546881",
            color: menuStates.home ? "#005CAC" : "#546881",
            fontWeight: menuStates.home ? "900" : "400",
            "&:hover": {
              WebkitTextFillColor: "#005CAC",
              color: "#005CAC",
            },

            "&:focus": {
              WebkitTextFillColor: "#005CAC",
              color: "#005CAC",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.home ? "#005CAC" : "#6B788E",
              fontWeight: menuStates.home ? "700" : "400",
            }}
          >
            <BusinessCenterOutlinedIcon></BusinessCenterOutlinedIcon>
          </ListItemIcon>

          <ListItemText>Home</ListItemText>
        </ListItemButton>
      </ListItem>
      {/* // **************User Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          className={appstyle.navtextbg}
          onClick={() => handleMenuClick("user")}
          ref={userButtonRef}
          selected={menuStates.user}
          sx={{
            fontSize: "12px",
            color: menuStates.user ? "#fff" : "#fff",
            fontWeight: menuStates.user ? "700" : "400",
            "&:hover": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },

            "&:focus": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.home ? "#fff" : "#fff",
              fontWeight: menuStates.home ? "700" : "400",
            }}
          >
            <GroupsOutlinedIcon></GroupsOutlinedIcon>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              User
              {menuStates.user ? (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 10,
                  }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    ml: 10,
                  }}
                ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStates.user} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/addsupermaster")}
            selected={location.pathname === "/addsupermaster"}
            sx={{
              pl: 7,
              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              WebkitTextFillColor:
                location.pathname === "/addsupermaster" ? "#005CAC" : "#546881",
              color:
                location.pathname === "/addsupermaster" ? "#005CAC" : "#546881",
              fontWeight:
                location.pathname === "/addsupermaster" ? "900" : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/addsupermaster"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/addsupermaster"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/addsupermaster" ? "900" : "400",
                }}
              ></CircleIcon>
              Super Master
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.user} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/supermasterprofileupdate")}
            selected={location.pathname === "/supermasterprofileupdate"}
            sx={{
              pl: 7,
              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              WebkitTextFillColor:
                location.pathname === "/supermasterprofileupdate"
                  ? "#005CAC"
                  : "#546881",
              color:
                location.pathname === "/supermasterprofileupdate"
                  ? "#005CAC"
                  : "#546881",
              fontWeight:
                location.pathname === "/supermasterprofileupdate"
                  ? "900"
                  : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/supermasterprofileupdate"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/supermasterprofileupdate"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/supermasterprofileupdate"
                      ? "900"
                      : "400",
                }}
              ></CircleIcon>{" "}
              Master
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.user} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/gamelist")}
            selected={location.pathname === "/gamelist"}
            sx={{
              pl: 7,
              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              WebkitTextFillColor:
                location.pathname === "/gamelist" ? "#005CAC" : "#546881",
              color: location.pathname === "/gamelist" ? "#005CAC" : "#546881",
              fontWeight: location.pathname === "/gamelist" ? "900" : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",
                  WebkitTextFillColor:
                    location.pathname === "/gamelist" ? "#005CAC" : "#C2C7D0",
                  color:
                    location.pathname === "/gamelist" ? "#005CAC" : "#C2C7D0",
                  fontWeight: location.pathname === "/gamelist" ? "900" : "400",
                }}
              ></CircleIcon>{" "}
              Agent
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* // **************Super Admin Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          className={appstyle.navtextbg}
          onClick={() => handleMenuClick("superMaster")}
          ref={userButtonRef}
          selected={menuStates.superMaster}
          sx={{
            fontSize: "12px",
            color: menuStates.superMaster ? "#fff" : "#fff",
            fontWeight: menuStates.superMaster ? "700" : "400",
            "&:hover": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },

            "&:focus": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.superMaster ? "#fff" : "#fff",
              fontWeight: menuStates.superMaster ? "700" : "400",
            }}
          >
            <ManageAccountsOutlinedIcon></ManageAccountsOutlinedIcon>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              Super Admin
              {menuStates.superMaster ? (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 2,
                  }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    ml: 2,
                  }}
                ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/usersupermaster")}
            selected={location.pathname === "/usersupermaster"}
            sx={{
              pl: 7,

              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },

              WebkitTextFillColor:
                location.pathname === "/usersupermaster"
                  ? "#005CAC"
                  : "#546881",
              color:
                location.pathname === "/usersupermaster"
                  ? "#005CAC"
                  : "#546881",
              fontWeight:
                location.pathname === "/usersupermaster" ? "900" : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/usersupermaster"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/usersupermaster"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/usersupermaster" ? "900" : "400",
                }}
              ></CircleIcon>
              Market Setting
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/supermasterprofileupdate")}
            selected={location.pathname === "/supermasterprofileupdate"}
            sx={{
              pl: 7,

              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },

              WebkitTextFillColor:
                location.pathname === "/supermasterprofileupdate"
                  ? "#005CAC"
                  : "#546881",
              color:
                location.pathname === "/supermasterprofileupdate"
                  ? "#005CAC"
                  : "#546881",
              fontWeight:
                location.pathname === "/supermasterprofileupdate"
                  ? "900"
                  : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/supermasterprofileupdate"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/supermasterprofileupdate"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/supermasterprofileupdate"
                      ? "900"
                      : "400",
                }}
              ></CircleIcon>
              Limit/Prize/Discount
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* // **************Reports ******************* */}
      <ListItem disablePadding>
        <ListItemButton
          className={appstyle.navtextbg}
          onClick={() => handleMenuClick("reports")}
          ref={userButtonRef}
          selected={menuStates.reports}
          sx={{
            fontSize: "12px",
            color: menuStates.reports ? "#fff" : "#fff",
            fontWeight: menuStates.reports ? "700" : "400",
            "&:hover": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },

            "&:focus": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.superMaster ? "#fff" : "#fff",
              fontWeight: menuStates.superMaster ? "700" : "400",
            }}
          >
            <InsertChartOutlinedRoundedIcon></InsertChartOutlinedRoundedIcon>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              Reports
              {menuStates.reports ? (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 7,
                  }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    ml: 7,
                  }}
                ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/transactionreport")}
            selected={location.pathname === "/transactionreport"}
            sx={{
              pl: 7,
              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },

              WebkitTextFillColor:
                location.pathname === "/transactionreport"
                  ? "#005CAC"
                  : "#546881",
              color:
                location.pathname === "/transactionreport"
                  ? "#005CAC"
                  : "#546881",
              fontWeight:
                location.pathname === "/transactionreport" ? "900" : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/transactionreport"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/transactionreport"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/transactionreport" ? "900" : "400",
                }}
              ></CircleIcon>
              Transaction Reports
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/turnoverreport")}
            selected={location.pathname === "/turnoverreport"}
            sx={{
              pl: 7,
              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },

              WebkitTextFillColor:
                location.pathname === "/turnoverreport" ? "#005CAC" : "#546881",
              color:
                location.pathname === "/turnoverreport" ? "#005CAC" : "#546881",
              fontWeight:
                location.pathname === "/turnoverreport" ? "900" : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/turnoverreport"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/turnoverreport"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/turnoverreport" ? "900" : "400",
                }}
              ></CircleIcon>
              Turnover Reports
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            onClick={() => navigate("/winlossreport")}
            selected={location.pathname === "/winlossreport"}
            sx={{
              pl: 7,
              fontSize: "12px",
              "&:hover": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },
              "&:focus": {
                WebkitTextFillColor: "#005CAC",
                background: "none",
                color: "#005CAC",
                fontWeight: "700",
              },

              WebkitTextFillColor:
                location.pathname === "/winlossreport" ? "#005CAC" : "#546881",
              color:
                location.pathname === "/winlossreport" ? "#005CAC" : "#546881",
              fontWeight:
                location.pathname === "/winlossreport" ? "900" : "400",
            }}
          >
            <ListItemText>
              <CircleIcon
                sx={{
                  pt: 1,
                  fontSize: "20px",

                  WebkitTextFillColor:
                    location.pathname === "/winlossreport"
                      ? "#005CAC"
                      : "#C2C7D0",
                  color:
                    location.pathname === "/winlossreport"
                      ? "#005CAC"
                      : "#C2C7D0",
                  fontWeight:
                    location.pathname === "/winlossreport" ? "900" : "400",
                }}
              ></CircleIcon>
              Win-Loss Reports
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* ********************Logout start**************** */}

      <ListItem disablePadding>
        <ListItemButton
          className={appstyle.navtextbg}
          onClick={() => handleMenuClick("calculation")}
          ref={userButtonRef}
          selected={menuStates.calculation}
          sx={{
            fontSize: "12px",
            color: menuStates.calculation ? "#fff" : "#fff",
            fontWeight: menuStates.calculation ? "700" : "400",
            "&:hover": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },

            "&:focus": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.calculation ? "#fff" : "#fff",
              fontWeight: menuStates.calculation ? "700" : "400",
            }}
          >
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              calculations
              {menuStates.calculation ? (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 4,
                  }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    ml: 4,
                  }}
                ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          className={appstyle.navtextbg}
          onClick={() => handleMenuClick("prediction")}
          ref={userButtonRef}
          selected={menuStates.prediction}
          sx={{
            fontSize: "12px",
            color: menuStates.prediction ? "#fff" : "#fff",
            fontWeight: menuStates.prediction ? "700" : "400",
            "&:hover": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },

            "&:focus": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.prediction ? "#fff" : "#fff",
              fontWeight: menuStates.prediction ? "700" : "400",
            }}
          >
            <BatchPredictionOutlinedIcon></BatchPredictionOutlinedIcon>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              Predictions
              {menuStates.prediction ? (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 4,
                  }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    ml: 4,
                  }}
                ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          className={appstyle.navtextbg}
          onClick={() => handleMenuClick("logs")}
          ref={userButtonRef}
          selected={menuStates.logs}
          sx={{
            fontSize: "12px",
            color: menuStates.logs ? "#fff" : "#fff",
            fontWeight: menuStates.logs ? "700" : "400",
            "&:hover": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },

            "&:focus": {
              WebkitTextFillColor: "#fff",
              color: "#fff",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.logs ? "#fff" : "#fff",
              fontWeight: menuStates.logs ? "700" : "400",
            }}
          >
            <EditNoteIcon></EditNoteIcon>
          </ListItemIcon>
          <ListItemText
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              Logs
              {menuStates.logs ? (
                <KeyboardArrowDownIcon
                  sx={{
                    ml: 10,
                  }}
                ></KeyboardArrowDownIcon>
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    ml: 10,
                  }}
                ></KeyboardArrowRightIcon>
              )}
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          onClick={() => handleMenuClick("home")}
          selected={menuStates.logout}
          sx={{
            margin: "2% 4% 2%  4%",
            fontSize: "12px",
            WebkitTextFillColor: menuStates.logout ? "#005CAC" : "#546881",
            color: menuStates.logout ? "#005CAC" : "#546881",
            fontWeight: menuStates.logout ? "900" : "400",
            "&:hover": {
              WebkitTextFillColor: "#005CAC",
              color: "#005CAC",
            },

            "&:focus": {
              WebkitTextFillColor: "#005CAC",
              color: "#005CAC",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: menuStates.logout ? "#005CAC" : "#6B788E",
              fontWeight: menuStates.logout ? "700" : "400",
            }}
          >
            <LogoutIcon ></LogoutIcon >
          </ListItemIcon>

          <ListItemText>Logout</ListItemText>
        </ListItemButton>
      </ListItem>

      <Divider sx={{ borderColor: "#038fdd", mt: 5 }}></Divider>
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
          sx={{
            backgroundColor: "#fefefe",
            boxShadow: "0 0 4px 4px rgba(0,0,0,0.08)",
            border: "none",
          }}
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
          <Search
            className={appstyle.search}
            sx={{ color: "#333333", background: "none" }}
          >
            <SearchIconWrapper sx={{ color: "#667085" }}>
              <SearchIcon sx={{ color: "#667085" }} />
            </SearchIconWrapper>
            <StyledInputBase
              className={appstyle.searchtxt}
              placeholder="Search anything here"
              height="42px"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                marginTop: "15px",
                marginBottom: "15px",
              },
            }}
          >
            <FormControl
              sx={{
                borderColor: "none",
                border: "none",
                padding: "0px",
                color: "#667085",
              }}
            >
              <CustomSelect
                className={appstyle.languagedropdown}
                value={selectedOption}
                onChange={handleChange}
                // autoWidth
                // displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(value) => (
                  <Typography className={appstyle.languageText}>
                    <ListItemIcon sx={{ padding: "0px" }}>
                      {options.find((o) => o.value === value)?.icon}
                    </ListItemIcon>
                    {value}
                  </Typography>
                )}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <ListItemIcon>{option.icon}</ListItemIcon>
                    <Typography>{option.label}</Typography>
                  </MenuItem>
                ))}
              </CustomSelect>
            </FormControl>
            {/* notification icon start */}
            <IconButton
              sx={{ color: "#667085" }}
              size="large"
              aria-label="show 17 new notifications"
              onClick={handleClick}
            >
              <Badge badgeContent={17} color="warning">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
            {/* notification popup */}
            <Popover
              id={id}
              open={open}
              anchornotification={anchornotification}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{ marginTop: "40px" }}
            >
              {/* Add your notification content here */}
              <div style={{ padding: "10px" }}>
                <h3>New Notifications</h3>
                <ul>
                  <li>Notification 1</li>
                  <li>Notification 2</li>
                  <li>Notification 3</li>
                  {/* Add more notifications as needed */}
                </ul>
              </div>
            </Popover>

            <IconButton
              sx={{ color: "#667085" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={profilemenu}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircleOutlinedIcon />
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
              <MoreIcon sx={{ color: "#fa8c15" }} />
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
              backgroundColor: "#003366",
              color: "#038fdd",
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
              backgroundColor: "#FFFFFF",
              color: "#038fdd",
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
          background: "#f5f5f5",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <RoutesPages />
      </Box>

      {renderProfileMenu}
      {renderLangMenu}
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
