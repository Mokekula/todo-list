import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import useStyles from "./MainPage.styles";
import { AddTodoForm } from "../components/AddTodoForm/AddTodoForm";
import { TodoList } from "../components/TodoList/TodoList";
import Context from "../context";

export const MainPage = () => {
  const classes = useStyles();
  const { notes } = useContext(Context);

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
