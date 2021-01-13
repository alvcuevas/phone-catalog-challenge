import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  detailsContent: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 25,
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray'
  },
  reducedDetailsContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 25
  },
  imgSection: {
    borderRight: '1px solid lightgray',
    padding: 20,
    display: 'flex',
    alignItems: 'center'
  },
  detailsSection: {
    padding: 20
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    color: '#ff5722',
    letterSpacing: 1.5,
    marginBottom: 15
  },
  phoneIcon: {
    marginRight: 15
  },
  feature: {
    marginBottom: 5,
    paddingLeft: 10
  }
}));
