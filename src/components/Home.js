import React, { useContext } from "react";
import LoadingIndicator from "./LoadingIndicator";
import NewsCards from "./NewsCards";
import { NewsContext } from "../utils/newsData";
import "../styles.css";
function Home() {
  const { isLoading } = useContext(NewsContext);
  return (
    <>
      <div className="load">{isLoading ? <LoadingIndicator /> : null}</div>
      <NewsCards />
    </>
  );
}
export default Home;
