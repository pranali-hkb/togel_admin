import { ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react'
import Avatar from "@mui/material/Avatar";
import appstyle from "./Logout.module.css";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";
import { useLocation } from "react-router-dom";
function Logout() {
  const userButtonRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem('user-token');
    navigate('/login');
  };
  return (
    <>
      {/* <ListItem disablePadding>
        <ListItemButton
          ref={userButtonRef}
 
          onClick={() => handleLogout()}
          selected={location.pathname === "/login"}
        >
          <ListItemIcon sx={{ color: "#038fdd" }}>
            <Avatar sx={{ backgroundColor: "#fff" , }}>
              
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
      </ListItem> */}
    </>
  )
}

export default Logout
