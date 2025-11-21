export interface OverviewItem {
  id: number;
  label: string;
  value: string;
}

export interface DetailRow {
  metric: string;
  borrower: string;
  coBorrower: string;
}

export const overviewItems: OverviewItem[] = [
  { id: 1, label: "Applications in queue", value: "14" },
  { id: 2, label: "Approved this week", value: "9" },
  { id: 3, label: "Average approval time", value: "3.2 days" },
];

export const detailRows: DetailRow[] = [
  {
    metric: "Income stability score",
    borrower: "78",
    coBorrower: "72",
  },
  {
    metric: "Repayment history score",
    borrower: "83",
    coBorrower: "77",
  },
  {
    metric: "Utilization score",
    borrower: "65",
    coBorrower: "69",
  },
];
