import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type RatioBoxProps = {
  label: string;
  value: string;
  warning?: boolean;
};

const RatioBox = ({ label, value, warning }: RatioBoxProps) => {
  const accentColor = warning ? "#f97316" : "#16a34a";
  const badgeBg = warning ? "#fef3c7" : "#dcfce7";

  return (
    <Box
  sx={{
    borderRadius: 1,
    p: 1.8,
    bgcolor: "#ffffff",
    boxShadow: "3px 3px 6px rgba(15,23,42,0.12)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }}
>

      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="caption"
          sx={{
            textTransform: "uppercase",
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 0.5,
            color: "#000",
          }}
        >
          {label}
        </Typography>

        <Box
          sx={{
            width: 22,
            height: 22,
            borderRadius: 3,
            bgcolor: badgeBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {warning ? (
            <WarningAmberIcon sx={{ fontSize: 16, color: accentColor }} />
          ) : (
            <CheckCircleOutlineIcon sx={{ fontSize: 16, color: accentColor }} />
          )}
        </Box>
      </Stack>

      <Typography
        variant="body1"
        sx={{
          mt: 1,
          fontWeight: 600,
          fontSize: 20,
          color: accentColor,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const KeyRatiosCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        border: "1px solid #e5e7eb",
        bgcolor: "#ffffff",
        borderRadius: 1,
        boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
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
        {/* Header */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: 600, color: "#111827" }}
          >
            Borrowers Combined Key Ratios
          </Typography>
          <MoreVertIcon sx={{ fontSize: 20, color: "text.disabled" }} />
        </Stack>

        {/* 2x2 grid that fills remaining space */}
        <Box
          sx={{
            mt: 2.5,
            flex: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gap: 2, // theme.spacing(2)
          }}
        >
          <RatioBox label="LTV" value="55.32%" warning />
          <RatioBox label="DTIR" value="57.10%" warning />
          <RatioBox label="CUR" value="5%" />
          <RatioBox label="EF" value="27.16%" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default KeyRatiosCard;
