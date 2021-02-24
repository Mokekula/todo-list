import React from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./MainPage.styles";
import { AddTodoForm } from "components/AddTodoForm/AddTodoForm";
import { TodoList } from "components/TodoList/TodoList";
import { ITodo } from 'types/todo';
const { useSelector } = require('react-redux');

export const MainPage: React.FC = () => {
  const classes = useStyles();
  const { notes }: { notes:ITodo[] | [] } = useSelector((state: IAppState) => state.notes);

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h5" color="secondary" paragraph={true}>
        Active notes: {notes.filter((note) => !note.done).length}
      </Typography>
      <AddTodoForm />
      <TodoList />
    </Container>
  );
};
