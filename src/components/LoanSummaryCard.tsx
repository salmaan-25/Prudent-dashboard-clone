import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type InfoRowProps = {
  label: string;
  value: string;
};

const InfoRow = ({ label, value }: InfoRowProps) => (
  <Stack direction="row" spacing={1.2} alignItems="flex-start">
    <Box
      sx={{
        width: 26,
        height: 26,
        borderRadius: "999px",
        bgcolor: "#f3f0ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlashOnOutlinedIcon sx={{ fontSize: 16, color: "#7c3aed" }} />
    </Box>
    <Box>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2">{value}</Typography>
    </Box>
  </Stack>
);

const LoanSummaryCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        bgcolor: "#ffffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
       <CardContent sx={{ p: 2.5, flex: 1 ,display: "flex",
      flexDirection: "column",}}>
         <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    
  >
    {/* Left: Avatar + Text */}
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ flexShrink: 0 }}
    >
      <Avatar
        sx={{
          width: 30,
          height: 30,
          bgcolor: "grey.300",
        }}
      />

      <Typography
        variant="body2"
        sx={{ fontWeight: "bold", color: "#000" }}
      >
        Loan #PN000043
      </Typography>
    </Stack>

    {/* Right: More icon */}
    <MoreVertIcon sx={{ fontSize: 20, color: "text.disabled" }} />
  </Stack>

        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mt: 2 }}>
          <Avatar sx={{ bgcolor: "#e5f0ff", color: "#1d4ed8" }}>A</Avatar>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Alex Jones
            </Typography>
            <Typography variant="caption" color="text.secondary">
              alexjones@gmail.com
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ mt: 2 }}>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontWeight: 700,
        color: "#000",
      }}
    >
      Co-Borrower Name
    </Typography>

    <Typography
      variant="body2"
      sx={{
        color: "#666",
        fontWeight: 400,
      }}
    >
      Eric Scott Shea (B2)
    </Typography>
  </Box>
</Box>

        <Divider sx={{ my: 1.75 }} />

        <Stack spacing={1.6}>
          <InfoRow label="Employment Type" value="Self-Employed" />
          <InfoRow label="Ownership Type" value="100%" />
          <InfoRow
            label="Registered Address"
            value="1076 Oldstone House Way, UTA 84098"
          />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LoanSummaryCard;
