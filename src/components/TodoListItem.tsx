import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import UnpublishedOutlinedIcon from "@mui/icons-material/UnpublishedOutlined";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { useState } from "react";
import { useTodos } from "../api/hooks";

interface Props {
  id: string;
  title: string;
  completed: boolean;
}

export default function TodoListItem({ id, title, completed }: Props) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const { toggleCompleted, deleteTodo } = useTodos();

  const handleDelete = () => deleteTodo(id);

  const handleToggleCompleted = () => {
    toggleCompleted(id);
    setIsCompleted((val) => !val);
  };

  return (
    <ListItem
      divider
      secondaryAction={
        <ListItemIcon onClick={handleDelete}>
          <Tooltip title="Remove Todo">
            <DeleteForeverOutlinedIcon color="error" />
          </Tooltip>
        </ListItemIcon>
      }
    >
      <ListItemIcon onClick={handleToggleCompleted}>
        <Tooltip title={isCompleted ? "Todo Completed" : "Complete Todo"}>
          {isCompleted ? (
            <UnpublishedOutlinedIcon color="success" />
          ) : (
            <CheckCircleOutlinedIcon color="primary" />
          )}
        </Tooltip>
      </ListItemIcon>
      <ListItemText
        sx={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {title}
      </ListItemText>
    </ListItem>
  );
}
