import React, { useContext } from "react";
import "./styles.css";
import NewsCards from "./components/NewsCards";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import { NewsContext } from "./utils/newsData";
import LoadingIndicator from "./components/LoadingIndicator";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  }
});
function App() {
  const { isLoading } = useContext(NewsContext);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="load">{isLoading ? <LoadingIndicator /> : null}</div>
        <NewsCards />
      </ThemeProvider>
    </div>
  );
}
export default App;
