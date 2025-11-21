import { Box, Container, Stack, Typography } from "@mui/material";
import AppHeader from "./components/AppHeader";
import DashboardContent from "./components/DashboardContent";

const App = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <AppHeader />

      <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
        <Stack spacing={3}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Welcome back, Loan Officer
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              Get 360 degree of a Loan Application
            </Typography>
          </Box>

          <DashboardContent />
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
