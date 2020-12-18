import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    marginBottom: 20,
    marginRight: 5,
    marginLeft: 10,
    height: "100%"
  },
  dateAndSource: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardNumber: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  current: {
    borderBottom: "solid #24bdf7"
  }
});
export default useStyles;
