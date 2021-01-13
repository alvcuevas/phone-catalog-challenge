import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneCardComponent from "../phone-card";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  catalog: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '50%',
    marginTop: 40
  },
}));

const PhoneListContainer = ({ list }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.catalog}>
        {list.map((phone) => (
          <PhoneCardComponent key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default PhoneListContainer;
