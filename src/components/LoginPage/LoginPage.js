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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    console.log(email, password);

    // Replace the API endpoint and request body with your actual login logic
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Assuming the response contains a token or some other indication of successful login
        if (data.token) {
          // Save user info to local storage
          localStorage.setItem("user-info", JSON.stringify(data));

          // Update the login status
          setIsLoggedIn(true);
        }
      })
      .catch((error) => {
        // Handle login error
        console.error("Login failed:", error);
      });
  };

  useEffect(() => {
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
        <Grid sm={6} md={6}  sx={{sm:{display:'none'}}}>
          <img
            src={logintodashboard}
            alt="loginImg"
            className={loginPageStyle.loginimg}
          />
        </Grid>
        <Grid sm={6} md={3} className={loginPageStyle.formSec}>
          <Typography variant="h1" className={loginPageStyle.logintxt}>Login</Typography>

          <form onSubmit={handleLogin}>
            <FormControl className={loginPageStyle.TextField}>
              <InputLabel className={loginPageStyle.inputtxt}>
                <span style={{ width: "10px", m: "2" }}>
                  <img src={loginusericon} width={20} /> Super Admin
                </span>
              </InputLabel>


              <OutlinedInput
                className={loginPageStyle.loginbox}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <Checkbox {...label} />
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
