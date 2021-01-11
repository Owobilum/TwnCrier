import React from "react";
import { makeStyles, CircularProgress } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));
export default function LoadingIndicator() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}
