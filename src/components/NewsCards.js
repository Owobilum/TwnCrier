import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { Button, Grid, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NewsContext } from "../utils/newsData";
import Landing from "./Landing";
import useAutoScroll from "../hooks/useAutoScroll";
import useClickFetcher from "../hooks/useClickFetcher";
import useStyles from "./styleNewsCards";
import NewsCardsPopover from "./NewsCardsPopover";
function NewsCards() {
  const { goBack } = useClickFetcher();
  const classes = useStyles();
  const { newsArticles, currentArticle, heading } = useContext(NewsContext);
  const [addToRefs] = useAutoScroll();
  if (newsArticles.length) {
    const news = newsArticles.map((article, index) => (
      <Grid
        item
        ref={addToRefs}
        key={article.title + index}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        className={classes.item}
      >
        <NewsCard
          key={index}
          url={article.url}
          img={
            article.image
              ? article.image
              : "https://uploads.codesandbox.io/uploads/user/1a5985a1-0a7f-42b3-81c2-3703197c8d42/3yta-newsplaceholder.jpg"
          }
          headline={article.title}
          story={article.description}
          date={article.publishedAt}
          source={article.source.name}
          articleNumber={index + 1}
          currentArticle={currentArticle}
        />
      </Grid>
    ));

    return (
      <>
        <Typography gutterBottom variant="h5" component="h2" color="primary">
          {heading ? heading.toUpperCase() : null} NEWS
        </Typography>

        <Grid
          container
          alignItems="stretch"
          direction="row"
          justify="flex-start"
          className={classes.container}
        >
          {news}
        </Grid>
        <div className={classes.bottomNav}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={goBack}
          >
            Back
          </Button>
          <NewsCardsPopover />
        </div>
      </>
    );
  } else {
    return <Landing />;
  }
}
export default NewsCards;
