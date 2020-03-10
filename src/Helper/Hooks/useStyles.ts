import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  },
  alignItemsCenter: {
    alignItems: "center"
  },
  container: {
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(10)
  },
  cool: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white !important",
    height: 48,
    padding: "0 30px"
  },
  formControl: {
    margin: theme.spacing(1),
    color: "white !important",
    minWidth: 120
  },
  title: {
    margin: theme.spacing(5),
    fontFamily: "Roboto",
    textAlign: "center"
  },
  currencyCard: {
    height: 150,
    width: 230,
    padding: theme.spacing(10)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "auto"
  },
  ma: {
    margin: "auto !important"
  }
}));
