import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar({ handleTheme, isDark }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Phone Catalog Challenge
          </Typography>
          <Button
            color="inherit"
            onClick={handleTheme}
            startIcon={!isDark ? <Brightness4Icon /> : <BrightnessHighIcon />}
          >
            Theme
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
