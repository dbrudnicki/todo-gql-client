import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";

interface Props {
  label: string;
  key: string;
}

export default function TodoListItem({ label, key }: Props) {
  return (
    <ListItem
      key={key}
      divider
      secondaryAction={
        <Tooltip title="Remove Todo">
          <DeleteForeverOutlinedIcon color="error" />
        </Tooltip>
      }
    >
      <ListItemIcon>
        <Tooltip title="Complete Todo">
          <CheckCircleOutlinedIcon color="primary" />
        </Tooltip>
      </ListItemIcon>
      <ListItemText>{label}</ListItemText>
    </ListItem>
  );
}
