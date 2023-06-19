import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Image } from 'cloudinary-react';
import Dashboard from '../Dashboard/Dashboard';
// import Users from '../Users/Users';
// import Ticket from '../Ticket/Ticket';
import Notifications from '../Notifications/Notifications';
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ConfirmationNumberRoundedIcon from '@mui/icons-material/ConfirmationNumberRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Homepage from "../Homepage/Homepage";
import Partnership from "../Partnership/Partnership";
import UserTicket from "../UserTicket/UserTicket";
import Roles from "../Roles/Roles";
import { FaBars } from 'react-icons/fa';
import { Button } from "@mui/material";
import DrawerStyles from './Drawer.module.css'
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { Details, Logout, SecurityTwoTone } from "@mui/icons-material";
import AddUser from '../AddUser/AddUser'
import EditUser from '../EditUser/EditUser'
import EditHomeBanner from "../EditHomeBanner/EditHomeBanner";
import Career from "../Career/Career";
import Investor from "../Investor/Investor";
import Projects from "../Projects/Projects";
// import ContactUs from "../ContactUs/ContactUs";
import EditOurBusiness from "../EditOurBusiness/EditOurBusiness";
import EditTeamMember from "../EditTeamMember/EditTeamMember";
import MeetOurTeam from "../MeetOurTeam/MeetOurTeam";
import OurBusiness from "../OurBusiness/OurBusiness";
import InvestmentHighlights from "../InvestmentHighlights/InvestmentHighlights";
import EditInvestHighlight from "../EditInvestHighlight/EditInvestHighlight";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import EditCompanyDetail from "../EditCompanyDetail/EditCompanyDetail";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";
import EditEvent from "../EditEvent/EditEvent";
import Gallery from "../Gallery/Gallery";
import EditGallery from "../EditGallery/EditGallery";
import BranchAddress from "../BranchAddress/BranchAddress";
import EditAddress from "../EditAddress/EditAddress";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import JobApplicants from "../JobApplicants/JobApplicants";
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import JobRoles from "../JobRoles/JobRoles";
import ViewApplicants from "../ViewApplicants/ViewApplicants";
import AddOurBusiness from "../AddOurBusiness/AddOurBusiness";
import AddTeamMember from "../AddTeamMember/AddTeamMember";
import AddInvestHighlight from "../AddInvestHighlight/AddInvestHighlight";
import AddCompanyDetail from "../AddCompanyDetail/AddCompanyDetail";
import AddUpcomingEvent from "../AddUpcomingEvent/AddUpcomingEvent";
import AddGallery from "../AddGallery/AddGallery";
import AddAddress from "../AddAddress/AddAddress";
import Applicant from "../Applicant/Applicant";

// import ContactsList from "../Contact/Contact";

// import ContactsList from "../UserList/UserList";

import PostJob from "../PostJob/PostJob";
import ApplicantDetails from "../ApplicantDetails/ApplicantDetails";
import EditJob from "../EditFAQ/EditFAQ";
import axios from "axios";
import { setLogout } from '../../state/GlobalState'
import Feedback from "../Feedback/Feedback";
import AddRoles from "../AddRoles/AddRoles";

import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";

// import AddIcon from "@mui/icons-material/Add";


// this is the import line from redux selector and dipatch
import { useSelector, useDispatch } from 'react-redux'

import { setNotificationCount } from "../../state/GlobalState";
import { setNotifications } from "../../state/GlobalState";


import { useEffect } from "react";
// import { NavLink, useNavigate } from 'react-router-dom'
import { isLoggedIn, doLogout } from "../../auth";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NewPassword from "../NewPassword/NewPassword";
import ForgotPassOTP from "../ForgotPassOTP/ForgotPassOTP";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import AboutUs from "../AboutUs/AboutUs";

// import UserList from "../Contact/Contact"


import { useLocation } from 'react-router-dom';
// import Contact from "../Contact/Contact";
import UserList from "../UserList/UserList"

// import { useLocation } from 'react-router-dom';

// import Contact from "../UserList/UserList";

import USP from "../USP/USP";
import AddUSP from "../AddUSP/AddUSP";
// import TestimonialPage from "../TestimonialPage/AddTestimonial";
import AddTestimonial from "../AddTestimonial/AddTestimonial";
import FAQPage from "../FAQPage/FAQPage";
import PostQA from "../PostQA/PostQA";
import PartnerPage from "../PartnerPage/PartnerPage";
import Benefits from "../Benefits/Benefits";
import AddBenefits from "../AddBenefits/AddBenefits";
import Opportunites from "../Opportunites/Opportunites";
import AddOpportunites from "../AddOpportunites/AddOpportunites";
import ProductPage from "../ProductPage/ProductPage";
import AddProduct from "../AddProduct/AddProduct";

import EditUSP from "../EditUSP/EditUSP";
import Testimonial from "../Testimonial/Testimonial";
import Project from "../Project/Project";
import AddProject from "../AddProject/AddProject";
import EditProject from "../EditProject/EditProject";
import AddFeedback from "../AddFeedback/AddFeedback";
import EditTestimonial from "../EditTestimonial/EditTestimonial";
import AddUserlist from "../AddUserlist/AddUserlist";
import EditFAQ from "../EditFAQ/EditFAQ";
import EditBenefits from "../EditBenefits/EditBenefits";
import EditProduct from "../EditProduct/EditProduct";
import EditOpportunites from "../EditOpportunites/EditOpportunites";

import NotAllowed from "../NotAllowed/NotAllowed";
import MyProfile from "../MyProfile/MyProfile";
import Contact from "../Contact/Contact";

import {  useRef } from 'react';








const drawerWidth = 240;

// Responsive code

export default function ClippedDrawer() {
  const [openUser, setOpenUser] = useState(false);
  // const [openUserss, setOpenUserss] = useState(false);
  const userButtonRef = useRef();

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (userButtonRef.current && !userButtonRef.current.contains(event.target)) {
  //       setOpenUser(false);
  //     }
  //   }

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  const handleUserClick = () => {
    setOpenUser(!openUser);
  };
  // const handlesUserssClick = () => {
  //   setOpenUserss(!openUserss);
  // };



  const UserRole = useSelector((state) => state.globalData.role);

  // const [count, setCount] = React.useState(0);

  // const resetCount = () => {
  //   setCount(0);
  // };
  const location = useLocation();

  // const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  // const [user, setUser] = useState(undefined)
  const [mail, setMail] = useState(undefined)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setLogin(isLoggedIn())
  //   const data = JSON.parse(localStorage.getItem('data'))
  //   setUser(data?.name || data?.sendDetails?.name)
  //   // setMail(data?.usernameOrEmail || data?.sendDetails?.usernameOrEmail)
  // }, [login])

  const logout = () => {
    window.localStorage.clear();
    dispatch(setLogout());
    console.clear();
  }



  // this is the line to get data from redux
  const count = useSelector((state) => state.globalData.notificationCount);
  const user = useSelector((state) => state.globalData.user);
  const name = useSelector((state) => state.globalData.name);
  // const details=useSelector((state)=>state.globalData.details);
  console.log(count);






  const incCount = () => {
    let tempcount = count + 1;
    dispatch(setNotificationCount({ count: tempcount }))
  }

  const resetCount = () => {
    dispatch(setNotificationCount({ count: 0 }))
  }


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  // const [openUser, setOpenUser] = React.useState(true);
  const [openContent, setOpenContent] = React.useState(true)
  const [openFormPortal, setOpenFormPortal] = React.useState(true)


  const handleUsersClick = () => {
    setOpenUser(!openUser);
  };

  const handleContentClick = () => {
    setOpenContent(!openContent)
  }

  const handleFormClick = () => {
    setOpenFormPortal(!openFormPortal)
  }

  const navigate = useNavigate()

  const activeTab = (route) => {
    navigate(`${route}`)
    return {
      color: '#f6faff'
    }
  }

  // profile section  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Profile Menu 

  const renderMenu = (
    <Menu
      sx={{ mt: isMenuOpen ? '49px' : '0px', }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} sx={{ display: 'flex', gap: '10px', }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', }}>
          {/* <Image
            publicId="https://res.cloudinary.com/dxluokypg/image/upload/v1683702654/Ellipse_kqekbg.svg"
            cloudName="dxluokypg"
          /> */}
          <AccountCircleIcon sx={{ color: '#DAE6FC' }} />



        </Box>
        <Box >
          <Typography variant="h3" sx={{ fontSize: '12px' }}>{name}</Typography>
          <Typography variant="h4" sx={{ fontSize: '12px' }}>{user}</Typography>
          {/* <Typography variant="h4" sx={{ fontSize: '12px' }}>{details}</Typography> */}
        </Box>
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ gap: '5%', display: 'flex', alignItems: 'center',mt:'5%',mb:'5%' }}>
        <Link to='/myprofile' sx={{ gap: '5%', }} style={{ textDecoration: 'none', gap: '5%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#000000' }}>
            <PersonOutlineIcon />
            My Profile
          </Box>
        </Link>
      </MenuItem>


      <MenuItem onClick={logout} sx={{ gap: '5%', mb: '15%' }}>
        <LogoutIcon /> Logout
      </MenuItem>
    </Menu>
  );


  // profile working 

  const renderMobileMenu = (
    <Menu sx={{ mt: '25%' }}>
      <MenuItem onClick={handleProfileMenuOpen} sx={{ mt: '25%' }}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          sx={{ mt: '25%' }}
        >
          {/* <AccountCircle /> */}
        </IconButton>
        <Typography variant="h6" sx={{ mt: '25%' }}>Profile</Typography>
      </MenuItem>
    </Menu>
  );


  const Search = styled("div")(({ theme }) => ({
    position: "relative",

    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    // width: "auto"
    // }
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#1F384C",

    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      // transition: theme.transitions.create("width"),
      width: "100%"
    }
  }));


  return (
    <Box sx={{ display: "flex", justifyContent: 'space-evenly' }}>
      <CssBaseline />
      {/* navbar Responsive  */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'white', paddingBottom: '8px', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)', }}
      >
        <Toolbar>
          <div>
            <Button sx={{ display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none' }, fontSize: '1.175rem', p: 'none' }}>
              <FaBars onClick={toggle} />
            </Button>

          </div>
          <Link to='/dashboard'>
            <Image publicId="https://res.cloudinary.com/dxluokypg/image/upload/v1682423845/steel_1_lgk5mz.svg" cloudName="dxluokypg" />
          </Link>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }, justifyContent: 'center', ml: { xs: '', sm: '', md: '10%', lg: '15%' } }}>
            <AppBar position="static" sx={{
              bgcolor: 'white', boxShadow: 'none'
            }}>
              <Toolbar >
                <Search sx={{
                  bgcolor: '#F6F6FB',
                  "&:hover": {
                    backgroundColor: '#F6F6FB'
                  },
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  <SearchIconWrapper sx={{ paddingLeft: '0px', paddingRight: '15px' }}>
                    <SearchIcon sx={{ color: '#627B87' }} />
                  </SearchIconWrapper>
                  <StyledInputBase sx={{ flexGrow: 1, marginLeft: '-25px', fontSize: '14px', color: '#627B87', '&::placeholder': { color: '#A8B5C2', textAlign: 'left', marginRight: '0px' } }} placeholder="Search…" />
                </Search>
              </Toolbar>
            </AppBar>
          </Box>


          <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: 'none' }}>
              <Toolbar>
                <Box sx={{ flexGrow: 1, }} />
                <Box sx={{
                  display: 'flex', alignItems: 'center', justifyContent: "center",
                  textAlign: "center",
                }}>
                  <IconButton
                    size="large"
                    edge="start"
                    aria-label="account of current user"
                    // aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                    sx={{ borderRadius: '0%', gap: { lg: '5px' }, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                  >
                    {/* <Image publicId="https://res.cloudinary.com/dxluokypg/image/upload/v1683702654/Ellipse_kqekbg.svg" cloudName="dxluokypg" /> */}
                    <AccountCircleIcon sx={{ color: '#DAE6FC' }} />


                    <Box sx={{ display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' }, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography sx={{ color: 'grey', textAlign: 'center', marginBottom: '2px' }}>{name}</Typography>
                      <KeyboardArrowDownIcon sx={{ color: 'grey' }} />
                    </Box>
                  </IconButton>
                </Box>
                {/* <IconButton sx={{ display: {xs:'none',sm:'flex',md:'flex',lg:'flex'},}} ><Image  publicId="https://res.cloudinary.com/dxluokypg/image/upload/v1683702654/Notif_Icon_pm3pss.svg" cloudName="dxluokypg" /></IconButton> */}

                {/* Notification icon strat   */}


                <Link to='/notifications'>
                  <Badge color="secondary" badgeContent={count} onClick={resetCount}>
                    <NotificationsRoundedIcon sx={{ color: '#DAE6FC', cursor: 'pointer' }} />
                  </Badge>
                </Link>



                {/* Notification icon end  */}
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          </Box>

        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={!isMobile || isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", pt: '24px', color: '#585858' }} >
          <List>
            <ListItem disablePadding component="div" onClick={() => navigate('/dashboard')}>
              <ListItemButton selected={location.pathname === '/dashboard'}
                sx={{ 'focus': {
                    backgroundColor: '#E3F5F',
                  },
                }}
              >
                <ListItemIcon>
                  <DashboardRoundedIcon
                    sx={{
                      minWidth: '40px',
                      borderRadius: '3px',
                      color: location.pathname === '/dashboard' ? 'darkblue' : 'inherit',}}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}
                  sx={{
                    color: location.pathname === '/dashboard' ? 'darkblue' : 'inherit',}}>
                  Dashboard
                </ListItemText>
              </ListItemButton>
            </ListItem>
            {UserRole?.includes("SuperAdmin") &&
              <>

<ListItem disablePadding component="div" onClick={handleUserClick}>
      <ListItemButton
        ref={userButtonRef}
        selected={openUser}
        sx={{
          '&:focus': {
            backgroundColor: '#E3F5F',
          },
          backgroundColor: openUser ? '#E3F5F' : 'transparent',
          color: openUser ? 'darkblue' : 'inherit',
        }}
      >
        <ListItemIcon sx={{ minWidth: '40px' }}>
          <ArticleRoundedIcon
            sx={{
              borderRadius: '3px',
              color: openUser ? 'darkblue' : 'inherit',
            }}
          />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}
          sx={{
            color: openUser ? 'darkblue' : 'inherit',
          }}
        >
          Users
        </ListItemText>
      </ListItemButton>
    </ListItem>

<Collapse in={openUser} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItemButton
      sx={{
        pl: 7,
        backgroundColor: location.pathname === '/userlist' ? '#E3F5F' : 'transparent',
        color: location.pathname === '/userlist' ? 'darkblue' : 'inherit',
      }}
      onClick={() => navigate('/userlist')}
      selected={location.pathname === '/userlist'}
    >
      <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>
        List
      </ListItemText>
    </ListItemButton>
  </List>
</Collapse>

                <Collapse
                  in={openUser}
                  timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ 
                      pl: 7,
                      backgroundColor: location.pathname === '/roles' ? '#E3F5F' : 'transparent',
      color: location.pathname === '/roles' ? 'darkblue' : 'inherit',
       }} onClick={() => navigate('/roles')} selected={location.pathname === '/roles'}>
                      <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Roles</ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              </>
            }
            {/* {UserRole.find(role=>["SuperAdmin","Admin"].includes(role)) &&
             <> */}




            <ListItem disablePadding  component="div" onClick={() => navigate('/ticket')}>
              <ListItemButton selected={location.pathname === '/ticket'}
               sx={{ 'focus': {
                backgroundColor: '#E3F5F',
              },
            }}
            >
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <ConfirmationNumberRoundedIcon 
                  sx={{
                    minWidth: '40px',
                    borderRadius: '3px',
                    color: location.pathname === '/ticket' ? 'darkblue' : 'inherit',}}/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}
                 sx={{
                  color: location.pathname === '/ticket' ? 'darkblue' : 'inherit',}}>Ticket</ListItemText>
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding component="div" onClick={() => navigate('/notifications')}>
              <ListItemButton selected={location.pathname === '/notifications'}>
                <ListItemIcon 
                // sx={{ minWidth: '40px' }}
                 sx={{ 'focus': {
                  backgroundColor: '#E3F5F',
                },
              }}>
                  <NotificationsRoundedIcon 
                   sx={{
                    minWidth: '40px',
                    borderRadius: '3px',
                    color: location.pathname === '/notifications' ? 'darkblue' : 'inherit',}}/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}
                 sx={{
                  color: location.pathname === '/notifications' ? 'darkblue' : 'inherit',}}>Notifications</ListItemText>
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding component="div" onClick={handleContentClick}>
              <ListItemButton ref={userButtonRef}
        selected={openContent}
        sx={{
          '&:focus': {
            backgroundColor: '#E3F5F',
          },
          backgroundColor: openContent ? '#E3F5F' : 'transparent',
          color: openContent ? 'darkblue' : 'inherit',
        }}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <ArticleRoundedIcon  
                    sx={{
                      borderRadius: '3px',
                      color: openContent ? 'darkblue' : 'inherit',
                    }}/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}
          sx={{
            color: openContent ? '#7b809a' : 'inherit',
          }}
                  >Content Management</ListItemText>
              </ListItemButton>
            </ListItem>


            <Collapse
              in={openContent}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                //  sx={{ pl: 7 }}
                sx={{
                  pl: 7,
                  backgroundColor: location.pathname === '/homepage' ? '#c5a31d' : 'transparent',
                  color: location.pathname === '/homepage' ? 'darkblue' : 'inherit',
                }}
                  onClick={() => navigate('/homepage')} selected={location.pathname === '/homepage'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Homepage</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <Collapse
              in={openContent}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                sx={{
                  pl: 7,
                  backgroundColor: location.pathname === '/partnerpage' ? '#E3F5F' : 'transparent',
                  color: location.pathname === '/partnerpage' ? 'darkblue' : 'inherit',
                }} onClick={() => navigate('/partnerpage')} selected={location.pathname === '/aboutus'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Partner</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <Collapse
              in={openContent}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                    sx={{
                      pl: 7,
                      backgroundColor: location.pathname === '/productpage' ? '#E3F5F' : 'transparent',
                      color: location.pathname === '/productpage' ? 'darkblue' : 'inherit',
                    }}
                     onClick={() => navigate('/productpage')} selected={location.pathname === '/products'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Product</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <Collapse
              in={openContent}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                    sx={{
                      pl: 7,
                      backgroundColor: location.pathname === '/project' ? '#E3F5F' : 'transparent',
                      color: location.pathname === '/project' ? 'darkblue' : 'inherit',
                    }}
                    onClick={() => navigate('/project')} selected={location.pathname === '/project'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Projects</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            {/* <ListItem disablePadding>
              <ListItemButton onClick={handleContentClick} selected={location.pathname === '/'}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <ArticleRoundedIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Forms</ListItemText>
              </ListItemButton>
            </ListItem> */}
            {/* <Collapse in={openContent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/contactus')} selected={location.pathname === '/contactus'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Contact</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}
            {/* <Collapse in={openContent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/partnership')} selected={location.pathname === '/partnership'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Partnership</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}

            {/* <Collapse in={openContent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/feedback')} selected={location.pathname === '/feedback'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Feedback</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}

            {/* </>
              } */}

            {/* <Collapse in={openContent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/investor')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Investor</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}
            {/* <Collapse in={openContent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/media')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Media</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}
            {/* <Collapse in={openContent} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/contact us')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Contact Us</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}

            {/* <ListItem disablePadding>
              <ListItemButton onClick={handleJobClick}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <BadgeRoundedIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Job Portal</ListItemText>
              </ListItemButton>
            </ListItem> */}

            {/* new start  */}


            <ListItem disablePadding>
              <ListItemButton onClick={handleFormClick} selected={location.pathname === '/'}>
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <ArticleRoundedIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Forms</ListItemText>
              </ListItemButton>
            </ListItem>
            <Collapse
              in={openFormPortal}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{
                    pl: 7,
                    backgroundColor: location.pathname === '/contactus' ? '#E3F5F' : 'transparent',
                    color: location.pathname === '/contactus' ? 'darkblue' : 'inherit',
                  }}
                   onClick={() => navigate('/contactus')} selected={location.pathname === '/contact'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Contact</ListItemText>
                </ListItemButton>
              </List>

            </Collapse>
            <Collapse
              in={openFormPortal}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                   sx={{
                    pl: 7,
                    backgroundColor: location.pathname === '/partnership' ? '#E3F5F' : 'transparent',
                    color: location.pathname === '/partnership' ? 'darkblue' : 'inherit',
                  }}
                   onClick={() => navigate('/partnership')} selected={location.pathname === '/partnership'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Partnership</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <Collapse
              in={openFormPortal}
              timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton 
                  sx={{
                    pl: 7,
                    backgroundColor: location.pathname === '/feedback' ? '#E3F5F' : 'transparent',
                    color: location.pathname === '/feedback' ? 'darkblue' : 'inherit',
                  }}
                   onClick={() => navigate('/feedback')} selected={location.pathname === '/feedback'}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Feedback</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>





            {/* <Collapse in={openJobPortal} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/jobapplicants')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Job Applicants</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={openJobPortal} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/jobapplicants')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Job Applicants</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>
            <Collapse in={openJobPortal} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/jobapplicants')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Job Applicants</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}

            {/* new close  */}


            {/* <Collapse in={openJobPortal} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/jobapplicants')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Job Applicants</ListItemText>
                </ListItemButton>
              </List>
            </Collapse>

            <Collapse in={openJobPortal} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 7 }} onClick={() => navigate('/jobroles')}>
                  <ListItemText primaryTypographyProps={{ fontSize: '15px', fontWeight: '500' }}>Manage Job Roles</ListItemText>
                </ListItemButton>
              </List>
            </Collapse> */}

          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: { xs: '#ffff', sm: '#f9f9f9', md: '#f9f9f9', lg: '#f9f9f9' } }}>
        <Toolbar />
        <Routes>

          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/contactus' element={<Contact />} />

          <Route path='/userlist' element={<PrivateRoute roleAllowed={["SuperAdmin"]} Comp={UserList} />} />
          <Route path='/role' element={<PrivateRoute roleAllowed={["SuperAdmin"]} Comp={Roles} />} />
          <Route path='/add user' element={<PrivateRoute roleAllowed={["SuperAdmin"]} Comp={AddUser} />} />
          <Route path="/add roles" element={<AddRoles roleAllowed={["SuperAdmin"]} Comp={AddUser} />} />
          <Route path='/edit user' element={<EditUser />} />
          {/* <Route path="contact us" element={<ContactUs/>}/> */}
          <Route path='/ticket' element=
            // {<PrivateRoute roleAllowed={["SuperAdmin"]} Comp={UserTicket} />}
            {<UserTicket />}
          />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/homepage' element={<Homepage />} />
          {/* <Route path='/aboutus'  element={<AboutUs />} /> */}
          <Route path='/edithomebanner' element={<EditHomeBanner />} />
          <Route path='/editusp' element={<EditUSP />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/edittestimonial' element={<EditTestimonial />} />
          <Route path='/adduserlist' element={<AddUserlist />} />


          <Route path='/usp' element={<USP />} />
          <Route path='/addusp' element={<AddUSP />} />
          <Route path='/addtestimonial' element={<AddTestimonial />} />

          {/* <Route path='/addtestimonial' element={<AddTestimonial />} /> */}
          <Route path='/partnerpage' element={<PartnerPage />} />
          <Route path='/benefits' element={<Benefits />} />
          <Route path='/addbenefits' element={<AddBenefits />} />
          <Route path='/opportunites' element={<Opportunites />} />
          <Route path='/addopportunites' element={<AddOpportunites />} />
          <Route path='/productpage' element={<ProductPage />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/project' element={<Project />} />
          <Route path='/addproject' element={<AddProject />} />
          <Route path='/editproject' element={<EditProject />} />
          <Route path='/addfeedback' element={<AddFeedback />} />
          <Route path='/editbenefits' element={<EditBenefits />} />
          <Route path='/editproduct/:id' element={<EditProduct />} />
          <Route path='editopportunites' element={<EditOpportunites />} />






          <Route path='/homebanner' element={<OurBusiness />} />
          <Route path='/addhomebanner' element={<AddOurBusiness />} />
          <Route path='/business/:id' element={<EditOurBusiness />} />
          {/* <Route path='/meetourteam' element={<MeetOurTeam />} /> */}
          {/* <Route path='/addteammember' element={<AddTeamMember />} />
          <Route path='/teammember/:id' element={<EditTeamMember/>} /> */}

          <Route path='/roles' element={<PrivateRoute roleAllowed={["SuperAdmin"]} Comp={Roles} />} />



          {/* <Route path='/investor' element={<Investor />} /> */}
          {/* <Route path='/investment' element={<InvestmentHighlights />} /> */}
          {/* <Route path='/addinvestment' element={<AddInvestHighlight />} /> */}
          {/* <Route path='/editinvestment/:id' element={<EditInvestHighlight />} /> */}

          <Route path='/companydetails' element={<CompanyDetails />} />
          <Route path='/adddetail' element={<AddCompanyDetail />} />
          <Route path='/editdetail/:id' element={<EditCompanyDetail />} />
          {/* <Route path='/media' element={<Media />} /> */}
          <Route path='/upcomingevents' element={<UpcomingEvents />} />
          <Route path='/addevent' element={<AddUpcomingEvent />} />
          <Route path='/editevent/:id' element={<EditEvent />} />
          {/* <Route path='/gallery' element={<Gallery />} /> */}
          {/* <Route path='/addgallery' element={<AddGallery />} /> */}
          {/* <Route path='/editgallery/:id' element={<EditGallery />} /> */}

          <Route path='/branchaddress' element={<BranchAddress />} />
          <Route path='/addaddress' element={<AddAddress />} />
          <Route path='/editaddress/:id' element={<EditAddress />} />
          <Route path='/editfaq' element={<EditFAQ />} />

          <Route path='/jobapplicants' element={<JobApplicants />} />
          <Route path='/myprofile' element={<MyProfile />} />


          <Route path='/partnership' element={<Partnership />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/faqpage' element={<FAQPage />} />
          <Route path='/postqa' element={<PostQA />} />



          {/* <Route path='/applicants/:id' element={<Applicant />} />
          <Route path='/jobroles' element={<JobRoles />} />
          <Route path='/postjob' element={<PostJob />} />
          <Route path='/editjob/:id' element={<EditJob />} />
          <Route path='/viewapplicants/:id' element={<ViewApplicants />} />
          <Route path='/applicantdetails/:id' element={<ApplicantDetails />} /> */}

          <Route path='/adduser' element={<AddUser />} />
          <Route path='/edituser' element={<EditUser />} />


          {/* New Added  */}
          {/* <Route path="/verifyEmail/" element={<VerifyEmail />} />
          <Route path="/verify" element={<EmailVerifing />} />  */}
          {/* <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/forgotpassOTP" element={<ForgotPassOTP />} />
          <Route path="/newpassword" element={<NewPassword />} /> */}


          {/* Unauth */}
          <Route path="/notAllowed" element={<NotAllowed />} />




        </Routes>
      </Box>
    </Box>
  );
}