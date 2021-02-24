import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import useStyles from "./AddTodoForm.styles";
import { addNewNote } from "redux/actions/notesActions";
const { useDispatch } = require('react-redux');

export const AddTodoForm: React.FC = () => {
  const classes = useStyles();
  const [newNoteTitle, setNewNoteTitle] = useState<string>('');
  const dispatch = useDispatch();

  const handleNewNoteTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    setNewNoteTitle(e.target.value)
  }

  const handleNewNote = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (newNoteTitle) {
      const createdNewNote = {
        id: Math.floor(Math.random() * Math.floor(9999999999)),
        title: newNoteTitle,
        done: false,
      };
      
      dispatch(addNewNote(createdNewNote));
      setNewNoteTitle("");
    }
  };

  return (
    <form className={classes.form} onSubmit={handleNewNote}>
      <TextField
        id="standard-name"
        label="Add new note"
        variant="outlined"
        color="secondary"
        size="small"
        fullWidth={true}
        value={newNoteTitle}
        onChange={handleNewNoteTitle}
      />
    </form>
  );
};
