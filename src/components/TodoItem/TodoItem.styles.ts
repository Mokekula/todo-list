import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  deleteButton: {
    width: 50,
    height: 40,
    borderRadius: "50%",
  },
  noteText: {
    maxWidth: 750,
    width: "100%",
    overflow: "hidden",
  },
}));

export default useStyles;
