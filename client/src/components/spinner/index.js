import React from 'react';
import { makeStyles, CircularProgress } from '@material-ui/core';

export default function Spinner() {
  const useStyles = makeStyles((theme) => ({
    spinner: {
        display: 'flex',
        marginTop: '4%',
        justifyContent: 'center'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
}