import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type GaugeProps = {
  label: string;
  value: number;
  color: string;
};

const CircularGauge = ({ label, value, color }: GaugeProps) => {
  return (
    <Box sx={{ flex: 1, textAlign: "center" }}>
      {/* label above gauge */}
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 1, fontSize: 12 }}
      >
        {label}
      </Typography>

      <Box sx={{ position: "relative", display: "inline-flex" }}>
        {/* background ring */}
        <CircularProgress
          variant="determinate"
          value={100}
          size={80}
          thickness={5}
          sx={{
            color: "#e5e7eb",
            position: "absolute",
            left: 0,
          }}
        />
        {/* colored ring */}
        <CircularProgress
          variant="determinate"
          value={value}
          size={80}
          thickness={5}
          sx={{ color }}
        />
        {/* center text */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, fontSize: 14 }}
          >
            {value.toFixed(2)}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const DecisionMatrixCard = () => {
  const approvalScore = 78; // 0–100

  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        bgcolor: "#ffffff",
        borderRadius: 1,
        boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          p: 2.5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* header row */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "#111827" }}
          >
            Combined Decision Matrix
          </Typography>
         <MoreVertIcon sx={{ fontSize: 20, color: "text.disabled" }} />
        </Stack>

        {/* gauges */}
        <Stack
          direction="row"
          spacing={3}
          sx={{ mt: 2.5 }}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <CircularGauge label="Ability to Pay" value={42.89} color="#22c55e" />
          <CircularGauge
            label="Propensity to Default"
            value={53.9}
            color="#E5A900"
          />
        </Stack>

        {/* Borrower approval section */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "#111827", fontSize: 13 }}
          >
            Borrower Approval Index
          </Typography>

          {/* pill (High) with green icon */}
          <Box
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                px: 1.8,
                py: 0.4,
                borderRadius: 0.5,
                color: "#15803d",
                fontSize: 12,
                fontWeight: 600,
                border: "2px solid lightgray",
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
              }}
            >
              
              🟢High
            </Box>
          </Box>

          {/* bar + arrow pointer */}
          <Box sx={{ mt: 1.4, position: "relative", height: 22 }}>
            {/* gradient bar */}
            <Box
              sx={{
                position: "absolute",
                left: 12,
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                height: 8,
                borderRadius: 999,
                background:
                  "linear-gradient(to right, #ef4444 0%, #fbbf24 50%, #22c55e 100%)",
              }}
            />
            {/* arrow pointer */}
            <Box
              sx={{
                position: "absolute",
                left: `calc(${approvalScore}% - 6px)`,
                top: "50%",
                transform: "translateY(-95%)",
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "10px solid #111827",
                filter: "drop-shadow(0 3px 4px rgba(15,23,42,0.35))",
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DecisionMatrixCard;
