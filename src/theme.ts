import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f7fb",
    },
    primary: {
      main: "#4b7cf3", // bluish accent for buttons / highlights
    },
    text: {
      primary: "#1f2933",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
