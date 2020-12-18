import React from "react";
import { makeStyles } from "@material-ui/core";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2)
  },
  tipSection: {
    padding: 16,
    backgroundColor: "#2F4F4F",
    color: "white"
  }
}));

export default function NewsCardsPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        startIcon={<HelpIcon />}
        onClick={handleClick}
      >
        Tips
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Typography
          color="textPrimary"
          variant="body2"
          component="p"
          className={classes.tipSection}
        >
          1.Activate the assistant by clicking on the microphone icon at the
          bottom right of your screen.
          <br />
          2.The microphone icon will turn to a triangle icon when the assistant
          is active.
          <br />
          3.Ensure the voice assistant is active before you give commands. The
          better your internet connection, the better your experience.
          <br />
          4.Answer "YES" or "NO" if you are asked a question by the voice
          assistant.
          <br />
          5.Say "Go Back" or "Homepage" to navigate to the homepage.
          <br />
          6.To open an article, say: "Open article <i>5</i>". (Enable pop-ups in
          your browser to enjoy this feature).
          <br />
          7.Some voice features might not function as expected if you don't load
          the news from the homepage using voice command.
          <br />
          8.You can also navigate by clicking on any news card above.
        </Typography>
      </Popover>
    </div>
  );
}
