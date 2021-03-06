import React from "react";
import { useHistory } from "react-router-dom";
import { Card, IconButton, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import StarRateIcon from "@material-ui/icons/StarRate";
import ShareIcon from "@material-ui/icons/Share";
import { useStyles } from './styles.js'; 

export default function PhoneCardComponent({ phone }) {
  const history = useHistory();
  const classes = useStyles();

  const handlePhoneDetails = () => history.push(`/details/${phone.id}`);
  const handleShare = () => alert("Sharing this awesome smartphone to your friends!");

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={phone.img}
          title={phone.phone}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            <StarRateIcon /> {phone.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {phone.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
          onClick={handlePhoneDetails}
          startIcon={<SearchIcon />}
        >
          {" "}
          Details
        </Button>
        <IconButton aria-label="share" onClick={handleShare}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
