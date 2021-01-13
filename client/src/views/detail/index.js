import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhoneDetails } from "../../store/actions/catalogActions";
import { Button, Typography, useMediaQuery } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid"; 
import { useStyles } from './styles';

const DetailView = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const classes = useStyles();
  const history = useHistory();
  const smallScreen = useMediaQuery('(max-width:650px)');
  const { details } = useSelector((store) => store.catalog);
  const phone = details[0];

  useEffect(() => {
    const id = Number(params.id);
    dispatch(fetchPhoneDetails(id));
  }, []);

  const handleReturn = () => {
    history.push(`/`);
  };

  const renderPhoneDetails = () => (
      <div className={classes.container}>
        <article className={`${smallScreen ? classes.reducedDetailsContent : classes.detailsContent}`}>
          <section className={classes.imgSection}>
            <img src={phone.img} alt={phone.desc} />
          </section>

          <section className={classes.detailsSection}>
            <Typography
              className={classes.brand}
              gutterBottom
              variant="h6"
              component="h2"
            >
              <PhoneAndroidIcon className={classes.phoneIcon} /> {phone.phone}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h6">
              Description
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.desc}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h6">
              Price
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.price}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Network
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.network}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Dimensions
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.dimensions}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Weight
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.weight}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Screen Technology
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.type}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Screen Size
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.size}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Screen Resolution
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.resolution}
            </Typography>
            <Typography className={classes.feature} variant="h6" component="h2">
              Color
            </Typography>
            <Typography
              className={classes.feature}
              variant="body1"
              color="textSecondary"
            >
              {phone.colors}
            </Typography>
          </section>
        </article>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
          onClick={handleReturn}
          startIcon={<ArrowBackIcon />}
        >
          {" "}
          Back to Catalog
        </Button>
      </div>
  );

  return <>{!!details.length && renderPhoneDetails()}</>;
};

export default DetailView;
