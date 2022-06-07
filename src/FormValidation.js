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
import { useFormik } from "formik";
import * as Yup from "yup";

const WithoutValidation = () => {
  const formik = useFormik({
    initialValues: { username: "", password: "", cnfpassword: "" },
    validationSchema: Yup.object({
      username: Yup.string()
        .trim()
        .max(10, "must be 10 character or less")
        .required("required"),
      password: Yup.string()
        .trim()
        .min(5, "password is to short - should be 5 chars min")
        .max(10, "must be 10 character or less")
        .matches(/[a-zA-z]/, "password can only contains letter")
        .required("required"),
      cnfpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "password must match")
        .required("required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
          <Box component="form" onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PersonIcon color="success" sx={{ mr: 1, my: 0.5 }} />
              <TextField
                variant="standard"
                color="success"
                label="username"
                name="username"
                {...formik.getFieldProps("username")}
              />
            </Box>
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon color="success" sx={{ mr: 1, my: 0.5 }} />
              <TextField
                variant="standard"
                color="success"
                label="password"
                name="password"
                type="password"
                {...formik.getFieldProps("password")}
              />
            </Box>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon color="success" sx={{ mr: 1, my: 0.5 }} />
              <TextField
                variant="standard"
                color="success"
                label="confirm password"
                name="cnfpassword"
                type="password"
                {...formik.getFieldProps("cnfpassword")}
              />
            </Box>
            {formik.touched.cnfpassword && formik.errors.cnfpassword ? (
              <div>{formik.errors.cnfpassword}</div>
            ) : null}
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
