import React, { useContext } from "react";
import { List, Typography } from "@material-ui/core";
import { TodoItem } from "../TodoItem/TodoItem";
import Context from "../../context";

export const TodoList = () => {
  const { notes, setNotes } = useContext(Context);

  const handleDone = (e) => {
    const changedNotes = notes.map((note) => {
      if (+e.target.value === note.id) {
        note.done = !note.done;
      }
      return note;
    });

    setNotes(changedNotes);
  };

  const handleDelete = (e) => {
    setNotes(notes.filter((note) => note.id !== +e.target.value));
  };

  return (
    <List>
      {notes.length ? (
        notes
          .sort((prevNote) => {
            return prevNote.done ? 1 : -1;
          })
          .map((note) => {
            return (
              <TodoItem
                note={note}
                key={note.id}
                handleDone={handleDone}
                handleDelete={handleDelete}
              />
            );
          })
      ) : (
        <Typography variant="body1">Тут пока ничего нет &#128577;</Typography>
      )}
    </List>
  );
};
