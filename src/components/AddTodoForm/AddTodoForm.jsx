import React, { useState, useContext } from "react";
import { TextField } from "@material-ui/core";
import useStyles from "./AddTodoForm.styles";
import Context from "../../context";

export const AddTodoForm = () => {
  const classes = useStyles();
  const { notes, setNotes } = useContext(Context);
  const [newNoteTitle, setNewNoteTitle] = useState("");

  const handleNewNote = (e) => {
    e.preventDefault();

    if (newNoteTitle) {
      const createdNewNote = {
        id: Math.floor(Math.random() * Math.floor(9999999999)),
        title: newNoteTitle,
        done: false,
      };

      setNotes([...notes, createdNewNote]);

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
        onChange={(e) => setNewNoteTitle(e.target.value)}
      />
    </form>
  );
};
