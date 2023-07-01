import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          height: 300,
          padding: 0,
          marginTop: "1rem",
          border: `1px solid ${grey[300]}`,
          borderRadius: "3px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1rem",
        },
      },
    },
  },
});
