import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  head: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 8,
    marginRight: 8
  },
  logoutBtn: {
    fontSize: 8
  },
  userEmail: {
    fontSize: 10,
    paddingRight: 2,
    paddingTop: 2
  },
  paper: {
    maxWidth: "100%",
    margin: 30,
    padding: 30,
    backgroundColor: "whitesmoke"
  },
  grid: {
    height: "100%"
  },
  card: {
    height: "100%",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#9bbcdd",
    color: "#3f3f3f",
    borderRadius: 0
  },
  tip: {
    backgroundColor: "lightgrey"
  },
  tipTag: {
    color: "red"
  },
  textField: {
    width: "25ch",
    margin: "0 auto"
  },
  helpCard: {
    wordWrap: "break-word"
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    overflow: "hidden",
    marginTop: 16,
    marginBottom: 8
  },
  gridList: {
    width: "100%",
    flexWrap: "wrap"
  },
  gridListTile: {
    cursor: "pointer"
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
});
export default useStyles;
