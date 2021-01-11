import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Card,
  Container,
  Typography
} from "@material-ui/core/";
import useStyles from "./styleAuthComponents";
import Alert from "@material-ui/lab/Alert";
import { NewsContext } from "../utils/newsData";
function LogIn() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoadin, setIsLoadin] = useState(false);
  const { login } = useContext(NewsContext);
  const history = useHistory();
  const handleEmailChange = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    let value = e.target.value;
    setPassword(value);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoadin(true);
      setError("");
      await login(email, password);
      history.push("/");
    } catch {
      setError("Failed to sign in.");
    }
    setIsLoadin(false);
  }
  return (
    <>
      <Container className={classes.container}>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Card className={classes.card}>
            <Typography variant="h2" color="primary">
              Log In
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
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.btn}
              disabled={isLoadin}
            >
              Log In
            </Button>
            <Typography className={classes.login}>
              <Link to="/forgot-password" className={classes.link}>
                Forgot Password?
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
export default LogIn;
