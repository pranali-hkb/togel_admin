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
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { styled, alpha } from "@mui/material/styles";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MainDahboard from "../MainDashboard/MainDahboard";


import RoutesPages from '../../RoutesPages'

const drawerWidth = 240;

function HomePage(props) {
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
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor:"#F2EDF3",
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    border:"1px solid #7B809A",
    height:"42px",
    color:"rgba(123, 128, 154, 1)",
    height:"42px",
    width:"173px",
        marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '10ch',
      },
    },
  }));

  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{ color: "#fff" }}></Divider>
      {/* <Box sx={{marginLeft:"5"}}><AccountCircleIcon ></AccountCircleIcon> Pranali Bos</Box> */}
      <Avatar >
        <img src="../../assets/images/profile/profile1.svg"/> 
      </Avatar>
      <Divider sx={{ color: "#fff" }}></Divider>

      <ListItem disablePadding onClick={() => navigate("/maindashboard")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <Avatar>
              <img src="" />
            </Avatar>
          </ListItemIcon>
          <ListItemText> Pranali Bos</ListItemText>
        </ListItemButton>
      </ListItem>
      <Divider></Divider>

      <ListItem disablePadding onClick={() => navigate("/maindashboard")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "white" }}>
            <Avatar>
              <GridViewIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Dashboard</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={() => navigate("/supermaster")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar>
              {" "}
              <PersonOutlineIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Super Master</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={() => navigate("/master")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar>
              <ContentPasteIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Master</ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding onClick={() => navigate("/agent")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar>
              <ConfirmationNumberIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Agent</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding onClick={() => navigate("/reports")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar>
              <NotificationsNoneIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Reports</ListItemText>
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding onClick={() => navigate("/logout")}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff" }}>
            <Avatar>
              <NotificationsNoneIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText className={appstyle.navtext}>Logout</ListItemText>
        </ListItemButton>
      </ListItem>

      <Divider />
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
          ml: { sm: `${drawerWidth}px` },boxShadow:"none", border:"none"
        }}
      >
        <Toolbar sx={{backgroundColor:"#F2EDF3", boxShadow:"none", border:"none"}}>
          {/* for mobile */}
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" },color:"rgba(196, 196, 196, 1)" }}
          >
            <MenuIcon />
          </IconButton>

          {/* icon on app bar */}

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


            <IconButton
              size="large"
              aria-label="show 4 new mails"
              
            >
              <Badge badgeContent={4} color="warning">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
            
            >
              <Badge badgeContent={17} color="warning">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
