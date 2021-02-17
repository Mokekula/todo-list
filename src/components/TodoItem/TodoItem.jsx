import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  ButtonBase,
} from "@material-ui/core";
import useStyles from "./TodoItem.styles";

export const TodoItem = ({ note, handleDone, handleDelete }) => {
  const classes = useStyles();

  return (
    <ListItem dense divider disabled={note.done}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={note.done}
          disableRipple
          value={note.id}
          onChange={handleDone}
        />
      </ListItemIcon>
      <ListItemText primary={`${note.title}`} className={classes.noteText} />
      <ListItemSecondaryAction onClick={handleDelete}>
        <ButtonBase value={note.id} className={classes.deleteButton}>
          &#10060;
        </ButtonBase>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
