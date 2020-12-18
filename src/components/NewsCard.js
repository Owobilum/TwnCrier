import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grow
} from "@material-ui/core";
import useStyles from "./styleNewsCard";
function NewsCard(props) {
  const classes = useStyles();
  const date = new Date(props.date);
  return (
    //findDomNode strictmode error caused by Grow will be sorted in material ui v5
    <Grow in={true} timeout={1500}>
      <Card
        className={`${classes.root} ${
          (props.currentArticle || props.currentArticle === 0) &&
          props.currentArticle === props.articleNumber - 1
            ? classes.current
            : null
        }`}
      >
        <CardActionArea href={props.url} target="_blank">
          <CardMedia
            component="img"
            alt="News Article Image"
            height="140"
            image={props.img}
            title="news article image"
          />

          <CardContent>
            <div className={classes.dateAndSource}>
              <Typography gutterBottom variant="caption" component="p">
                {date.toDateString()}
              </Typography>

              <Typography gutterBottom variant="caption" component="p">
                {props.source}
              </Typography>
            </div>

            <Typography gutterBottom variant="body1" component="h2">
              {props.headline}
            </Typography>

            <Typography variant="caption" color="textSecondary" component="p">
              {props.story}
            </Typography>
            <Typography
              variant="caption"
              component="p"
              color="primary"
              className={classes.cardNumber}
            >
              {props.articleNumber}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
}
export default NewsCard;
