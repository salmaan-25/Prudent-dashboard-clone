import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { detailRows, overviewItems } from "../data/dummyData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type ActiveTab = "overview" | "details";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e5e7eb",
        bgcolor: "#ffffff",
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        {/* Header row: title + actions */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={1.5}
        >
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              Decision Matrix Breakdown
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 0.3, display: "block" }}
            >
              Switch between Overview and Details to inspect the decision model.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              size="small"
              startIcon={<DownloadOutlinedIcon sx={{ fontSize: 18 }} />}
              sx={{
                textTransform: "none",
                borderRadius: 0.5,
                fontSize: 13,
                bgcolor: "#7c3aed",
                "&:hover": { bgcolor: "#6d28d9" },
              }}
            >
              Download as excel
            </Button>
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
              sx={{
                textTransform: "none",
                borderRadius: 0.5,
                fontSize: 13,
                borderColor: "#e5e7eb",
                color: "#111827",
                bgcolor: "#ffffff",
              }}
            >
              Alex Jones + 1
            </Button>
          </Stack>
        </Stack>

        {/* Tabs row */}
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
  <Button
    variant={activeTab === "overview" ? "contained" : "text"}
    size="small"
    onClick={() => setActiveTab("overview")}
    sx={{
      textTransform: "none",
      borderRadius: 0.5,
      fontSize: 13,
      color: "#fff",

      bgcolor: "#7c3aed",
      '&:hover': {
        bgcolor: "#7c3aed",
      },
      '&:active': {
        bgcolor: "#7c3aed",
      },
    }}
  >
    Overview
  </Button>

  <Button
    variant={activeTab === "details" ? "contained" : "text"}
    size="small"
    onClick={() => setActiveTab("details")}
    sx={{
      textTransform: "none",
      borderRadius: 999,
      fontSize: 13,
      color: activeTab === "details" ? "#fff" : "#7c3aed",

      bgcolor: activeTab === "details" ? "#7c3aed" : "transparent",
      '&:hover': {
        bgcolor: "#7c3aed",
        color: "#fff",
      },
      '&:active': {
        bgcolor: "#7c3aed",
      },
    }}
  >
    Details
  </Button>
</Stack>


        {/* Content based on tab */}
        <Box sx={{ mt: 2.5 }}>
          {activeTab === "overview" ? (
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{ mt: 1 }}
            >
              {overviewItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    flex: 1,
                    borderRadius: 2,
                    border: "1px solid #e5e7eb",
                    p: 1.8,
                    bgcolor: "#f9fafb",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ textTransform: "uppercase", fontSize: 11 }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ mt: 0.5, fontWeight: 600 }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Box sx={{ mt: 1 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>
                      Metric
                    </TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>
                      Borrower
                    </TableCell>
                    <TableCell sx={{ fontSize: 12, color: "text.secondary" }}>
                      Co-Borrower
                    </TableCell>
                    <TableCell sx={{ fontSize: 12 }} align="right">
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {detailRows.map((row) => (
                    <TableRow key={row.metric}>
                      <TableCell sx={{ fontSize: 13 }}>
                        {row.metric}
                      </TableCell>
                      <TableCell sx={{ fontSize: 13 }}>
                        {row.borrower}
                      </TableCell>
                      <TableCell sx={{ fontSize: 13 }}>
                        {row.coBorrower}
                      </TableCell>
                      <TableCell align="right">
                        <Chip
                          label="Within range"
                          size="small"
                          sx={{
                            fontSize: 11,
                            bgcolor: "#ecfdf5",
                            color: "#15803d",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TabsSection;
