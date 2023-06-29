import {
  List,
  ListItem,
  ListSubheader,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { KeyboardEvent, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const theme = useTheme();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      alert(`Message: ${todo}`);
    }
  };

  const list = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(<ListItem key={i}>Todo - {i + 1}</ListItem>);
    }
    return arr;
  };

  return (
    <Paper elevation={3} sx={{ width: "30rem", height: "25rem" }}>
      <Typography variant="h4" marginBottom={2}>
        Todos
      </Typography>
      <TextField
        id="add-todo"
        label="Add a Todo"
        variant="filled"
        value={todo}
        onChange={(e) => setTodo(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        fullWidth
      />
      <List>
        <ListSubheader sx={{ textAlign: "center" }}>
          <Typography variant="h6" color={theme.palette.common.crazy}>
            Todo List
          </Typography>
        </ListSubheader>
        {list()}
      </List>
    </Paper>
  );
}
