import React from "react";
import "./styles.css";
import Home from "./components/Home";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1fbbff"
    }
  }
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <PrivateRoute component={Home} exact path="/"></PrivateRoute>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
