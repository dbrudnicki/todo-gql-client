import {
  Divider,
  List,
  ListSubheader,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardEvent, useState } from "react";
import TodoListItem from "./TodoListItem";
import { useTodos } from "../api/hooks";
import { Todo } from "../gql/graphql";

export default function App() {
  const [todo, setTodo] = useState("");
  const { todos, isLoading, isSuccess, isError, addTodo } = useTodos();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      addTodo(todo);
      setTodo("");
    }
  };

  const displayList = () => {
    return todos?.map((todoItem: Todo) => (
      <TodoListItem
        key={todoItem.id}
        id={todoItem.id}
        title={todoItem.title}
        completed={todoItem.completed}
      />
    ));
  };

  if (isError)
    return (
      <Typography variant="h1" color="error">
        An error occurred
      </Typography>
    );

  if (!isLoading && isSuccess)
    return (
      <Paper elevation={3} sx={{ width: "30rem", height: "25rem" }}>
        <Typography variant="h4" marginBottom={2}>
          Todos
        </Typography>
        <TextField
          id="add-todo"
          label="Add a Todo"
          variant="standard"
          value={todo}
          onChange={(e) => setTodo(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          fullWidth
        />
        <List>
          <ListSubheader sx={{ textAlign: "center" }}>
            <Typography variant="h6" color="primary">
              Todo List
            </Typography>
          </ListSubheader>
          <Divider />
          {displayList()}
        </List>
      </Paper>
    );
}
