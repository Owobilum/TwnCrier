import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    height: "100vh"
  },
  grid: {
    paddingTop: 16
  },
  form: {
    marginTop: "20vh",
    width: "100%"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    maxWidth: 400,
    marginTop: 20,
    padding: 15,
    background: "whitesmoke"
  },
  textfield: {
    marginTop: 20
  },
  btn: {
    marginTop: 20
  },
  login: {
    marginTop: 10
  },
  link: {
    color: "#2196F3",
    textDecoration: "none"
  }
});
export default useStyles;
