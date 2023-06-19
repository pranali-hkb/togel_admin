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
import GridViewIcon from "@mui/icons-material/GridView";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Avatar from "@mui/material/Avatar";
import appstyle from "./HomePage.module.css";
import Agent from "../Agent/Agent";
import Reports from "../Reports/Reports";
import Logout from "../Logout/Logout";
import Master from "../Master/Master";
import SuperMaster from "../SuperMaster/SuperMaster";
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
import { Settings } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation } from 'react-router-dom';

const drawerWidth = 280;

function HomePage(props) {
  const [openUser, setOpenUser] = useState(false);
  const userButtonRef = useRef();
  const [openSuperMaster, setOpenSuperMaster] = React.useState(true);
  const [openMaster, setOpenMaster] = React.useState(true);
  const [openAgent, setOpenAgent] = React.useState(true);
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

  // active listitem color
  const activeTab = (route) => {
    return {
      color: "#1095FF", // Change this to the desired active tab color
    };
  };

  const [openContent, setOpenContent] = React.useState(true)

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
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

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
            <ListItemButton sx={{ color: openUser ? "#E3F5F" : "transparent" }}>
              <ListItemIcon sx={{ color: "white" }}>
                <Avatar sx={{ backgroundColor: "#fff" }}>
                  <img src={userprofile} alt="" />
                </Avatar>
              </ListItemIcon>
              <ListItemText> Pranali Bos</ListItemText>
            </ListItemButton>
          </ListItem>
        </div>
      </div>
      <ListItem
        disablePadding
        sx={{ pt: 4 }}
        onClick={() => navigate("/dashboard")}
      >
        <ListItemButton sx={{ color: openUser ? "#E3F5F" : "transparent" }}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <img src={dashboardprofile} alt="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Dashboard</ListItemText>
        </ListItemButton>
      </ListItem>
      {/* // **************SuperMaster Start******************* */}

      <ListItem disablePadding>
        <ListItemButton
          onClick={handleSuperMasterClick}
          ref={userButtonRef}
          selected={openSuperMaster}
          sx={{
            '&:hover': {
              backgroundColor: '#c5a31d',
              color:'#111'
            },
            '&:focus': {
              backgroundColor: '#c5a31d',
              color:'#111'

            },
            backgroundColor: openSuperMaster ? '#c5a31d' : 'transparent',
            color: openSuperMaster ? '#c5a31d' : 'inherit',
          }}        >
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <img src={supermasterprofile} alt="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}                   
            sx={{ display: "flex", justifyContent: "start" ,color: openSuperMaster ? '#7b809a' : 'inherit',}}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Super Master
              <KeyboardArrowDownIcon sx={{ ml: 4 }}></KeyboardArrowDownIcon>
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>


      <Collapse in={openSuperMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
          
          sx={{ pl: 7 , backgroundColor: location.pathname === '/dashboard' ? '#E3F5F' : 'transparent',
          color: location.pathname === '/homepage' ? 'darkblue' : 'inherit',}}
          onClick={() => navigate('/dashboard')} selected={location.pathname === '/dashboard'}
          >
            <ListItemText
              className={appstyle.menunavtext}
              
            >
              <PersonIcon sx={{ pt: 1 }}></PersonIcon> Profile Update
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openSuperMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 7 , backgroundColor: location.pathname === '/dashboard' ? '#E3F5F' : 'transparent',
            color: location.pathname === '/homepage' ? 'darkblue' : 'inherit',}}
            onClick={() => navigate('/dashboard')} selected={location.pathname === '/dashboard'}>          
            <ListItemText
              className={appstyle.menunavtext}
              sx={{ backgroundColor: openUser ? "#E3F5F" : "transparent" }}
            >
              <SettingsIcon sx={{ pt: 1 }}></SettingsIcon> Settings
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>

      {/* // **************SuperMaster End******************* */}

      {/* // **************Master Start******************* */}

      <ListItem disablePadding>
        <ListItemButton onClick={handleMasterClick}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <img src={masterprofile} alt="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
            sx={{ display: "flex", justifyContent: "start" }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Master
              <KeyboardArrowDownIcon sx={{ ml: 10 }}></KeyboardArrowDownIcon>
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={openMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7 }} onClick={() => navigate("/")}>
            <ListItemText className={appstyle.menunavtext}>
              <PersonIcon sx={{ pt: 1 }}></PersonIcon> Profile Update
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openMaster} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7 }} onClick={() => navigate("/")}>
            <ListItemText className={appstyle.menunavtext}>
              <SettingsIcon sx={{ pt: 1 }}></SettingsIcon> Settings
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      {/* // **************Master End*******************


{/* // **************Agent Start******************* */}

      <ListItem disablePadding>
        <ListItemButton onClick={handleAgentClick}>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <img src={agentprofile} alt="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText
            className={appstyle.navtext}
            sx={{ display: "flex", justifyContent: "start" }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Agent
              <KeyboardArrowDownIcon sx={{ ml: 11 }}></KeyboardArrowDownIcon>
            </span>
          </ListItemText>
        </ListItemButton>
      </ListItem>
      <Collapse in={openAgent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7 }} onClick={() => navigate("/")}>
            <ListItemText className={appstyle.menunavtext}>
              <PersonIcon sx={{ pt: 1 }}></PersonIcon> Profile Update
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      <Collapse in={openAgent} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 7 }} onClick={() => navigate("/")}>
            <ListItemText className={appstyle.menunavtext}>
              <SettingsIcon sx={{ pt: 1 }}></SettingsIcon> Settings
            </ListItemText>
          </ListItemButton>
        </List>
      </Collapse>
      {/* // **************Agent End******************* */}

      <ListItem disablePadding onClick={() => navigate("/reports")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <img src={reportprofile} alt="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Reports</ListItemText>
        </ListItemButton>
      </ListItem>

      {/* ********************Master End**************** */}

      <ListItem disablePadding onClick={() => navigate("/logout")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar sx={{ backgroundColor: "#fff" }}>
              <img src={logoutprofile} alt="" />
            </Avatar>
          </ListItemIcon>

          <ListItemText className={appstyle.navtext}>Logout</ListItemText>
        </ListItemButton>
      </ListItem>

      <Divider sx={{ borderColor: "#fff", mt: 5 }}></Divider>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F2EDF3" }}>
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
          sx={{ backgroundColor: "#F2EDF3", boxShadow: "none", border: "none" }}
        >
          {/* for mobile */}
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none", color: "#111" },
              color: "rgba(196, 196, 196, 1)",
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
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "linear-gradient(180deg, #3E3D45 0%, #202020 100%)",
              // borderRadius: "12px",
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
