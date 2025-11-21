import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import LoanSummaryCard from "./LoanSummaryCard";
import DecisionMatrixCard from "./DecisionMatrixCard";
import KeyRatiosCard from "./KeyRatiosCard";
import TabsSection from "./TabsSection";

const DashboardContent = () => {
  return (
    <Stack spacing={3}>
      {/* Top three cards */}
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, md: 4 }}>
          <LoanSummaryCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <DecisionMatrixCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <KeyRatiosCard />
        </Grid>
      </Grid>

      
      <TabsSection />
    </Stack>
  );
};

export default DashboardContent;
