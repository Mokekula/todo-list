import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    border: `2px solid ${theme.palette.action.disabled}`,
    marginTop: 15,
    padding: 25,
  },
}));

export default useStyles;
