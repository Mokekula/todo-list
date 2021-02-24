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
import { changeDoneNote, deleteNote } from "redux/actions/notesActions";
import { ITodo } from 'types/todo';
const { useDispatch } = require('react-redux');

export const TodoItem: React.FC<ITodo> = ({ title, id, done }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDoneNote({id: id, done: !done}))
  };

  const handleDelete = () => {
    dispatch(deleteNote(id))
  };

  return (
    <ListItem dense divider disabled={done}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={done}
          disableRipple
          onChange={handleDone}
        />
      </ListItemIcon>
      <ListItemText primary={`${title}`} className={classes.noteText} />
      <ListItemSecondaryAction 
      onClick={handleDelete}
      >
        <ButtonBase className={classes.deleteButton}>
          &#10060;
        </ButtonBase>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
