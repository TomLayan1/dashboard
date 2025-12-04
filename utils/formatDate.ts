// utils/transactionsToMonthly.ts
import { transactions } from "@/app/data";

type MonthlyRow = {
  month: string;   // label for chart: "Jan", "Feb", etc.
  year: number;
  credit: number;
  debit: number;
};

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function buildMonthlyData(year: number): MonthlyRow[] {
  // 1. Start with 12 months initialized to 0
  const months: MonthlyRow[] = Array.from({ length: 12 }, (_, i) => ({
    month: MONTH_LABELS[i],
    year,
    credit: 0,
    debit: 0,
  }));

  // 2. Aggregate transactions into those months
  transactions.forEach((tx) => {
    const [txYearStr, txMonthStr] = tx.date.split("-"); // "2025-09-02" → ["2025","09","02"]
    const txYear = Number(txYearStr);
    const txMonthIndex = Number(txMonthStr) - 1; // 0–11

    if (txYear !== year || txMonthIndex < 0 || txMonthIndex > 11) return;

    if (tx.transaction_type === "credit") {
      months[txMonthIndex].credit += tx.amount;
    } else {
      months[txMonthIndex].debit += tx.amount;
    }
  });

  return months;
}

// For this dataset everything is 2025:
export const formatDate: MonthlyRow[] = buildMonthlyData(2025);