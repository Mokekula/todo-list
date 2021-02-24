import React, { useEffect } from "react";
import { List, Typography, CircularProgress  } from "@material-ui/core";
import { TodoItem } from "components/TodoItem/TodoItem";
import { fetchNotesRequest } from 'redux/actions/notesActions';
import { ITodo } from 'types/todo';
const { useDispatch, useSelector } = require('react-redux');

export const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const { notes }: { notes:ITodo[] | [] } = useSelector((state: IAppState) => state.notes);
  const { loading }: { loading: boolean } = useSelector((state: IAppState) => state.loader);

  useEffect(() => {
    try {
      dispatch(fetchNotesRequest());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <List>
      {!loading ? notes.length ? (
        notes
          .sort((prevNote: ITodo) => {
            return prevNote.done ? 1 : -1;
          })
          .map((note: ITodo) => {
            return (
              <TodoItem
                title= {note.title}
                id = {note.id}
                key={note.id}
                done = {note.done}
              />
            );
          })
      ) : (
        <Typography variant="body1">Тут пока ничего нет &#128577;</Typography>
      ) : <CircularProgress />}
    </List>
  );
};
