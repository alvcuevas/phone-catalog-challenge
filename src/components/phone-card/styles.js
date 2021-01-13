import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 310,
    marginBottom: 40,
  },
  media: {
    height: 280,
  },
  button: {
    margin: theme.spacing(1),
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
}));
