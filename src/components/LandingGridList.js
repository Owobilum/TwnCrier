import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  useMediaQuery
} from "@material-ui/core";
import useStyles from "./styleLanding";
import tileData from "../utils/tileData";
import useClickFetcher from "../hooks/useClickFetcher";

function LandingGridList() {
  const {
    getBreakingNews,
    getNewsByTopic,
    getNewsByCountry
  } = useClickFetcher();

  const phone = useMediaQuery("(min-width:300px)");
  const tablet = useMediaQuery("(min-width:600px)");
  const laptop = useMediaQuery("(min-width:1024px)");
  const classes = useStyles();
  const getGridListCols = () => {
    if (laptop) {
      return 4;
    }
    if (tablet) {
      return 3;
    }
    if (phone) {
      return 1;
    }

    return 1;
  };

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={180}
        className={classes.gridList}
        cols={getGridListCols()}
      >
        {tileData.map((tile, index) => (
          <GridListTile
            key={tile.title}
            className={classes.gridListTile}
            onClick={
              index > 0 && index < 7
                ? () => getNewsByTopic(tile.title)
                : index > 6 && index < 12
                ? () => getNewsByCountry(tile.title)
                : index === 0
                ? getBreakingNews
                : null
            }
          >
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              subtitle={<span>{tile.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default LandingGridList;
