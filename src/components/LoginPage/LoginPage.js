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
import HomePage from "../HomePage/HomePage"



function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      <HomePage/>
      </div>
    );
  }
  // username: 'kminchelle',
  //   password: '0lelplR',
  return (
  
    <div className={loginPageStyle.mainsec}>
      <div className={loginPageStyle.innersec}>
        <div className={loginPageStyle.inner_sec}>
        
          <Typography variant="h1">Hi, Welcome</Typography>
          <Typography variant="h2">
            Enter your credentials to continue
          </Typography>
          <form onClick={handleLogin}>
            <TextField
              label="Email Address / Username"
              variant="outlined"
              className={loginPageStyle.TextField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControl
              variant="outlined"
              className={loginPageStyle.TextField}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
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
              <p className={loginPageStyle.loggedintxt}>Keep me logged in</p>
              <p className={loginPageStyle.forgotpwtxt}>Forgot Password?</p>
            </div>
            <Button
              type="submit"
              variant="contained"
              size="large"
              className={loginPageStyle.SignInBtn} sx={{width:"100%"}}
            >
              Sign In
            </Button>
          </form>
          <p style={{ border: "0.5px solid #e3e8ef" }}></p>
          <Typography className={loginPageStyle.text}>
            Don't have an account?
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
