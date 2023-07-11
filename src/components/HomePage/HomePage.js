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
import hkblogo from "../../assets/images/Logo/logo.png";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import Popover from "@mui/material/Popover";
import { FormControl, Select, Typography } from "@mui/material";
import { styled as muiStyled } from '@mui/system';





// css for language dropdown for border none
const CustomSelect = muiStyled(Select)({
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',

  },
});





const drawerWidth = 270;

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
    { value: "ID", label: "Indonesia", icon: <GTranslateIcon /> },
    { value: "ENG", label: "English", icon: <GTranslateIcon /> },
  ];

  const [selectedOption, setSelectedOption] = useState("ID");

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
      style={{ marginTop: "40px" ,}}
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
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.home ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <GridViewOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></GridViewOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
              },

              WebkitTextFillColor:
                location.pathname === "/maindashboard" ? "#fa8c15" : "#038fdd",
            }}
            className={appstyle.navtext}
          >
            Home
          </ListItemText>
        </ListItemButton>
      </ListItem>
      {/* // **************User Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => handleMenuClick("user")}
          ref={userButtonRef}
          selected={menuStates.user}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.user ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <AccountCircleOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></AccountCircleOutlinedIcon>
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
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
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/sampleTable"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/sampleTable" ? "orange" : "trabsparent",
            }}
            onClick={() => navigate("/sampleTable")}
            selected={location.pathname === "/sampleTable"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <Person4OutlinedIcon
                sx={{
                  pt: 1,
                }}
              ></Person4OutlinedIcon>{" "}
              Super Master
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.user} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/addsupermaster"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/addsupermaster"
                  ? "orange"
                  : "trabsparent",
            }}
            onClick={() => navigate("/addsupermaster")}
            selected={location.pathname === "/addsupermaster"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <PersonIcon
                sx={{
                  pt: 1,
                }}
              ></PersonIcon>{" "}
              Master
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.user} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/gamelist" ? "#fa8c15" : "trabsparent",
              color:
                location.pathname === "/gamelist" ? "orange" : "trabsparent",
            }}
            onClick={() => navigate("/gamelist")}
            selected={location.pathname === "/gamelist"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <ListAltOutlined
                sx={{
                  pt: 1,
                }}
              ></ListAltOutlined>{" "}
              Agent
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* // **************Super Admin Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          onClick={() => handleMenuClick("superMaster")}
          ref={userButtonRef}
          selected={menuStates.superMaster}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.superMaster ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <AccountCircleOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></AccountCircleOutlinedIcon>
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
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
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/usersupermaster"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/usersupermaster"
                  ? "orange"
                  : "trabsparent",
            }}
            onClick={() => navigate("/usersupermaster")}
            selected={location.pathname === "/usersupermaster"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <Person4OutlinedIcon
                sx={{
                  pt: 1,
                }}
              ></Person4OutlinedIcon>{" "}
              Market Setting
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.superMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/supermasterprofileupdate"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/supermasterprofileupdate"
                  ? "orange"
                  : "trabsparent",
            }}
            onClick={() => navigate("/supermasterprofileupdate")}
            selected={location.pathname === "/supermasterprofileupdate"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <PersonIcon
                sx={{
                  pt: 1,
                }}
              ></PersonIcon>{" "}
              Limit/Prize/Discount
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* // **************Reports ******************* */}
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => handleMenuClick("reports")}
          ref={userButtonRef}
          selected={menuStates.reports}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.reports ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <AccountCircleOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></AccountCircleOutlinedIcon>
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
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
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/transactionreport"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/transactionreport"
                  ? "orange"
                  : "trabsparent",
            }}
            onClick={() => navigate("/transactionreport")}
            selected={location.pathname === "/transactionreport"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <ListAltOutlined
                sx={{
                  pt: 1,
                }}
              ></ListAltOutlined>{" "}
              Transaction Reports
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/turnoverreport"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/turnoverreport"
                  ? "orange"
                  : "trabsparent",
            }}
            onClick={() => navigate("/turnoverreport")}
            selected={location.pathname === "/turnoverreport"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <ListAltOutlined
                sx={{
                  pt: 1,
                }}
              ></ListAltOutlined>{" "}
              Turnover Reports
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={menuStates.reports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            ref={userButtonRef}
            sx={{
              pl: 7,

              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
                color: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/winlossreport"
                  ? "#fa8c15"
                  : "trabsparent",
              color:
                location.pathname === "/winlossreport"
                  ? "orange"
                  : "trabsparent",
            }}
            onClick={() => navigate("/winlossreport")}
            selected={location.pathname === "/winlossreport"}
          >
            <ListItemText sx={{}} className={appstyle.menunavtext}>
              <ListAltOutlined
                sx={{
                  pt: 1,
                }}
              ></ListAltOutlined>{" "}
              Win-Loss Reports
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* ********************Logout start**************** */}

      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          onClick={() => handleMenuClick("calculation")}
          selected={menuStates.calculation}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.calculation ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <BatchPredictionOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></BatchPredictionOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/calculation" ? "#fa8c15" : "#038fdd",
            }}
            className={appstyle.navtext}
          >
            Calculation
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          onClick={() => handleMenuClick("prediction")}
          selected={menuStates.prediction}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.prediction ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <BatchPredictionOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></BatchPredictionOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/prediction" ? "#fa8c15" : "#038fdd",
            }}
            className={appstyle.navtext}
          >
            Prediction
          </ListItemText>
        </ListItemButton>
      </ListItem>
      {/* <Logout /> */}
      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          onClick={() => handleMenuClick("logs")}
          selected={menuStates.logs}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.logs ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <ExitToAppOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></ExitToAppOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/logs" ? "#fa8c15" : "#038fdd",
            }}
            className={appstyle.navtext}
          >
            Logs
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
          onClick={() => handleMenuClick("logout")}
          selected={menuStates.logout}
          sx={{
            "&:hover": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            "&:focus": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },
            "&:active": {
              WebkitTextFillColor: "#fa8c15",
              color: "#fa8c15",
            },

            color: menuStates.logout ? "#fa8c15" : "#038fdd",
          }}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              {/* <img src={logoutprofile} alt="" /> */}
              <ExitToAppOutlinedIcon
                sx={{ color: "#fa8c15" }}
              ></ExitToAppOutlinedIcon>
            </Avatar>
          </ListItemIcon>

          <ListItemText
            sx={{
              "&:hover": {
                WebkitTextFillColor: "#fa8c15",
              },
              "&:focus": {
                WebkitTextFillColor: "#fa8c15",
              },
              WebkitTextFillColor:
                location.pathname === "/login" ? "#fa8c15" : "#038fdd",
            }}
            className={appstyle.navtext}
          >
            Logout
          </ListItemText>
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
            <Search
              className={appstyle.search}
              sx={{ color: "#262626", background: "none" }}
            >
              <SearchIconWrapper sx={{ color: "#262626" }}>
                <SearchIcon sx={{ color: "#262626" }} />
              </SearchIconWrapper>
              <StyledInputBase
                className={appstyle.searchtxt}
                placeholder="Search…"
                height="42px"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={profilemenu}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Person4OutlinedIcon />
            </IconButton> */}

            <IconButton
              sx={{ color: "#262626" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={profilemenu}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Person4OutlinedIcon />
            </IconButton>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              sx={{ color: "#262626" }}
            >
              <Badge badgeContent={4} color="warning">
                <SettingsOutlinedIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              sx={{ color: "#262626" }}
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

            {/* <IconButton
              sx={{ color: "#262626" }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={langmenu}
              aria-haspopup="true"
              onClick={handleLangMenuOpen}
            >
              <GTranslateIcon />
            </IconButton> */}
            <FormControl sx={{ borderColor: "none", border:'none', padding:"0px"}}>
              <CustomSelect
                 className={appstyle.languagedropdown}
   
                value={selectedOption}
                onChange={handleChange}
                // autoWidth
                // displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                renderValue={(value) => (
                  <Typography className={appstyle.languageText}>
                    <ListItemIcon sx={{padding:"0px"}}>
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
              backgroundColor: "#003366",
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
