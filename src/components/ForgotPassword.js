import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  Container,
  Typography,
  Grid,
  CardMedia
} from "@material-ui/core/";
import { Alert } from "@material-ui/lab/";
import useStyles from "./styleAuthComponents";
import { NewsContext } from "../utils/newsData";
function ForgotPassword() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoadin, setIsLoadin] = useState(false);
  const { resetPassword } = useContext(NewsContext);
  const handleEmailChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setIsLoadin(true);
      setError("");
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password.");
    }
    setIsLoadin(false);
  }
  return (
    <>
      <Container className={classes.container}>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={3}
          className={classes.grid}
        >
          <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
            <CardMedia
              component="img"
              alt="logo"
              image="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/rCfs-twncrier_logo_light.png"
              title="twncrier_logo"
            />
          </Grid>
        </Grid>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Card className={classes.card}>
            <Typography variant="h2" color="primary">
              Password Reset
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {message && <Alert severity="success">{message}</Alert>}
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              className={classes.textfield}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.btn}
              disabled={isLoadin}
            >
              Reset Password
            </Button>
            <Typography className={classes.login}>
              <Link to="/login" className={classes.link}>
                Log In
              </Link>
            </Typography>
          </Card>
          <Typography className={classes.login}>
            Need an account?{" "}
            <Link to="/signup" className={classes.link}>
              Sign Up
            </Link>
          </Typography>
        </form>
      </Container>
    </>
  );
}
export default ForgotPassword;
