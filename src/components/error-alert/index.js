import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  alert: {
    width: 500,
    height: 200,
    marginTop: "4%",
  },
}));

export default function ErrorAlert() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.alert}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error while fetching phones!
        </Alert>
      </div>
    </div>
  );
}
