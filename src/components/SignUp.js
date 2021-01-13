import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Card,
  Container,
  Typography,
  Grid,
  CardMedia
} from "@material-ui/core/";
import useStyles from "./styleAuthComponents";
import { Link, useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab/";
import { NewsContext } from "../utils/newsData";
function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isLoadin, setIsLoadin] = useState(false);
  const { signup } = useContext(NewsContext);
  const history = useHistory();
  const handleEmailChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handlePasswordConfirmChange = (e) => {
    let value = e.target.value;
    setPasswordConfirm(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords do not match.");
    }
    try {
      setIsLoadin(true);
      setError("");
      await signup(email, password);
      history.push("/");
    } catch {
      setError("Failed to create an account.");
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
              Sign Up
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              className={classes.textfield}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              className={classes.textfield}
            />
            <TextField
              id="password-confirm"
              label="Confirm Password"
              type="password"
              value={passwordConfirm}
              variant="outlined"
              onChange={handlePasswordConfirmChange}
              className={classes.textfield}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.btn}
              disabled={isLoadin}
            >
              Sign Up
            </Button>
          </Card>
          <Typography className={classes.login}>
            Already have an account?{" "}
            <Link to="/login" className={classes.link}>
              Log in
            </Link>
          </Typography>
        </form>
      </Container>
    </>
  );
}
export default SignUp;
