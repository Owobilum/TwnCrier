import React, { useContext } from "react";
import {
  Paper,
  Grid,
  Card,
  Typography,
  CardMedia,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useClickFetcher from "../hooks/useClickFetcher";
import { NewsContext } from "../utils/newsData";
import LandingGridList from "./LandingGridList";

import useStyles from "./styleLanding";

function Landing(props) {
  const { searchTerm } = useContext(NewsContext);
  const { handleChange, getNewsByTerm } = useClickFetcher();
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={3}>
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
              image="https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/UO7d-logo3.jpg"
              title="App_Logo"
            />
          </Grid>
        </Grid>

        <LandingGridList />

        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className={classes.gridItem}
          >
            <Card className={classes.card} variant="outlined">
              <Typography variant="h6" component="h2" gutterBottom>
                <b>Search for News</b>
              </Typography>

              <Typography variant="body2" component="p">
                Say: gist me about <i>BITCOIN</i>
                <br />
              </Typography>

              <FormControl className={classes.textField}>
                <InputLabel htmlFor="standard-adornment-text">
                  search here
                </InputLabel>
                <Input
                  className={classes.inputBox}
                  type="text"
                  value={searchTerm}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="Search" onClick={getNewsByTerm}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
export default Landing;
