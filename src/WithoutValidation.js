import React from "react";
import {
  Avatar,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

const WithoutValidation = () => {
  const [inputValues, setinputValues] = useState({
    username: "",
    password: "",
    cnfpassword: "",
  });
  console.log(inputValues);

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // setinputValues({
    //   ...inputValues,
    //   [name]: value,
    // });
    const { name, value } = e.target;
    setinputValues((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValues.username.length <= 5 && inputValues.username !== "") {
      alert("invalid username");
    } else if (inputValues.password !== inputValues.cnfpassword) {
      alert("password not match");
    } else {
      console.log("submitted", inputValues);
    }
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={6}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <Grid item xs={12} sm={6} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://source.unsplash.com/random"
            alt="avatarhere"
            sx={{ width: 60, height: 60 }}
          />
          <Typography sx={{ my: 1 }} component="h1" variant="h5">
            WELCOME
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PersonIcon color="success" sx={{ mr: 1, my: 0.5 }} />
              <TextField
                variant="standard"
                color="success"
                label="username"
                name="username"
                value={inputValues.username}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon color="success" sx={{ mr: 1, my: 0.5 }} />
              <TextField
                variant="standard"
                color="success"
                label="password"
                name="password"
                type="password"
                value={inputValues.password}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon color="success" sx={{ mr: 1, my: 0.5 }} />
              <TextField
                variant="standard"
                color="success"
                label="confirm password"
                name="cnfpassword"
                type="password"
                value={inputValues.cnfpassword}
                onChange={handleChange}
              />
            </Box>
            <Link
              href="#"
              variant="body2"
              underline="none"
              color="success"
              sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
            >
              Forgot password ?
            </Link>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="success"
              sx={{ mt: 3, mb: 2, borderRadius: 50 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WithoutValidation;
