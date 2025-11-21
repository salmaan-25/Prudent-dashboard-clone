import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import prudentLogo from "../assets/prudent-logo.png"; 

const navItems = ["Home", "Dashboard", "Reporting", "Users"];

const subNavItems = [
  "Loan Summary",
  "Bank statement Summary",
  "Savings",
  "Tax Forms",
  "Credit Review",
  "Borrower P&L",
];

const AppHeader = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          px: { xs: 1.5, md: 0 },
          flexDirection: "column",
          alignItems: "stretch",
          gap: 1.5,
          py: 1,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src={prudentLogo}
              alt="Prudent AI"
              sx={{ height: 30, display: "block" }}
            />

            <Stack
              direction="row"
              spacing={2}
              sx={{ ml: 3, display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontWeight: item === "Dashboard" ? 600 : 400,
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton size="small">
              <NotificationsNoneIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <SettingsOutlinedIcon fontSize="small" />
            </IconButton>
            <Avatar
              alt="User"
              src=""
              sx={{ width: 32, height: 32, bgcolor: "#7c3aed", ml: 0.5 }}
            >
              A
            </Avatar>
          </Stack>
        </Stack>

        
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          sx={{ width: "100%", gap: { xs: 1, md: 0 } }}
        >
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {subNavItems.map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  fontSize: 13,
                  color:
                    item === "Borrower P&L"
                      ? theme.palette.text.primary
                      : "text.secondary",
                  fontWeight: item === "Borrower P&L" ? 600 : 400,
                  backgroundColor:
                    item === "Borrower P&L" ? "#f3f4f6" : "transparent",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
              border: "1px solid #e0e0e0",
              boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              px: 2,
              py: 0.8,
              width: "300px",
              maxWidth: 400,
            }}
          >
            <SearchIcon sx={{ color: "#9e9e9e", fontSize: 20 }} />

            <InputBase
              placeholder="Search"
              sx={{
                ml: 1.5,
                flex: 1,
                fontSize: 14,
                color: "#000",
                "& input::placeholder": {
                  color: "#9e9e9e",
                  opacity: 1,
                },
              }}
            />
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
