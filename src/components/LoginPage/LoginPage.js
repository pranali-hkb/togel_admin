import React, { useEffect, useState } from "react";
import loginPageStyle from "./LoginPage.module.css";
import Dashboard from "../Dashboard/Dashboard";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import HomePage from "../HomePage/HomePage";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logintodashboard from "../../assets/images/profile/logintodashboard.svg";
import AccountCircle from "@mui/icons-material/AccountCircle";
import loginusericon from "../../assets/images/profile/loginusericon.svg";
import passwardkeyicon from "../../assets/images/profile/passwardkeyicon.svg";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import axios from "axios";
import config from "../../config";
import { useNavigate } from 'react-router-dom';
import { AES, enc } from "crypto-js";



const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function LoginPage() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // const handleLogin = async (e) => {
  //   e.preventDefault(); // Prevent form submission from refreshing the page

  // console.log("username and password", username, password);

  // Replace the API endpoint and request body with your actual login logic
  // fetch("https://dummyjson.com/auth/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     username: username,
  //     password: password,
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     // Assuming the response contains a token or some other indication of successful login
  //     if (data.token) {
  //       // Save user info to local storage
  //       localStorage.setItem("user-info", JSON.stringify(data));

  //       // Update the login status
  //       setIsLoggedIn(true);
  //     }
  //   })
  //   .catch((error) => {
  //     // Handle login error
  //     console.error("Login failed:", error);
  //   });

  //   
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      sendData();
      if (rememberMe) {
        const encryptedUsername = AES.encrypt(username, "secret-key").toString();
        const encryptedPassword = AES.encrypt(password, "secret-key").toString();
  
        localStorage.setItem("encryptedUsername", encryptedUsername);
        localStorage.setItem("encryptedPassword", encryptedPassword);
      } else {
        localStorage.removeItem("encryptedUsername");
        localStorage.removeItem("encryptedPassword");
      }
    }else {
      console.log("Please fill all fields!");
    }
  };

  const sendData = () => {
    const data = {
      username: username,
      password: password,
    };
    console.log("save data==>", data);
    axios
      .post(`${config.serverUrl}/auth/login`, data)
      .then(function (response) {
        console.log("response=>", response);
        let adminInformation = response.data.data;
        localStorage.setItem("user-token",response.data.token)
        console.log("adminInformation=>",adminInformation)
        if (response.data.token) {
                // Save user info to local storage
                localStorage.setItem("user-info", btoa(JSON.stringify(response.data)));
                setIsLoggedIn(true);
                // Update the login status
                // setIsLoggedIn(true);
                // navigate(<HomePage />);
              }
        // if(response.status === 200){
        //   navigate(<HomePage />);
        // }
      })
      .catch(function (e) {
        console.log("error=>", e);
      });
  };

  useEffect(() => {

    const encryptedUsername = localStorage.getItem("encryptedUsername");
    const encryptedPassword = localStorage.getItem("encryptedPassword");
  
    if (encryptedUsername && encryptedPassword) {
      const decryptedUsername = AES.decrypt(encryptedUsername, "secret-key").toString(enc.Utf8);
      const decryptedPassword = AES.decrypt(encryptedPassword, "secret-key").toString(enc.Utf8);
  
      setUserName(decryptedUsername);
      setPassword(decryptedPassword);
      setRememberMe(true);
    }

  
    // Clear user info from local storage
    localStorage.removeItem("user-info");

    if (localStorage.getItem("user-info")) {
      console.log("Login Successful");
      setIsLoggedIn(true);
    }

   
  }, []);

  if (isLoggedIn) {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
  // username: 'kminchelle',
  //   password: '0lelplR',
  return (
    <Box sx={{ flexGrow: 1 }} className={loginPageStyle.mainsec}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid sm={6} md={6} sx={{ sm: { display: "none" } }}>
          <img
            src={logintodashboard}
            alt="loginImg"
            className={loginPageStyle.loginimg}
          />
        </Grid>
        <Grid sm={6} md={3} className={loginPageStyle.formSec}>
          <Typography variant="h1" className={loginPageStyle.logintxt}>
            Login
          </Typography>

          <form onSubmit={handleLogin}>
            <FormControl className={loginPageStyle.TextField}>
              <InputLabel className={loginPageStyle.inputtxt}>
                <span style={{ width: "10px", m: "2" }}>
                  <img src={loginusericon} width={20} /> Super Admin
                </span>
              </InputLabel>

              <OutlinedInput
                className={loginPageStyle.loginbox}
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                label="super Admin"
              />
            </FormControl>

            <FormControl className={loginPageStyle.TextField}>
              <InputLabel className={loginPageStyle.inputtxt}>
                <span style={{ width: "10px", m: "2" }}>
                  <img src={passwardkeyicon} width={20} /> Password
                </span>{" "}
              </InputLabel>
              <OutlinedInput
                className={loginPageStyle.loginbox}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="outlined-adornment-password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end"></IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <div className={loginPageStyle.newsection}>
              <p className={loginPageStyle.remembertxt}>
                {" "}
                <Checkbox {...label} 
                 checked={rememberMe}
                 onChange={(e) => setRememberMe(e.target.checked)}
                 />
                Remember me
              </p>
              <p className={loginPageStyle.forgotpwtxt}>Forgot Password?</p>
            </div>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={loginPageStyle.SignInBtn}
              sx={{ width: "100%" }}
            >
              Login{" "}
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;
