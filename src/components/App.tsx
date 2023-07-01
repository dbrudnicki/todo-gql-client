import {
  List,
  ListSubheader,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { KeyboardEvent, useState } from "react";
import TodoListItem from "./TodoListItem";
import { useTodoList } from "../api/hooks";
import { Todo } from "../gql/graphql";

export default function App() {
  const [todo, setTodo] = useState("");
  const { data: todoList, isLoading, isSuccess, isError } = useTodoList();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      alert(`Message: ${todo}`);
    }
  };

  const displayList = () => {
    if (!todoList) return [];

    return todoList.todos.map((todoItem: Todo) => (
      <TodoListItem key={todoItem.id} label={todoItem.title} />
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
            <Typography variant="h6">Todo List</Typography>
          </ListSubheader>
          {displayList()}
        </List>
      </Paper>
    );
}
