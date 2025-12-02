// utils/transactionsToMonthly.ts
import { transactions } from "@/app/data";

type MonthlyRow = {
  month: string;   // e.g. "Sep 2025"
  credit: number;
  debit: number;
};

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export const monthlyTransactionData: MonthlyRow[] = (() => {
  const map: Record<string, MonthlyRow> = {};

  transactions.forEach((tx) => {
    const [year, month] = tx.date.split("-"); // "2025-09-02" → ["2025","09","02"]
    const monthIndex = Number(month) - 1;
    const key = `${year}-${month}`;
    const label = `${monthNames[monthIndex]} ${year}`; // "Sep 2025"

    if (!map[key]) {
      map[key] = { month: label, credit: 0, debit: 0 };
    }

    if (tx.transaction_type === "credit") {
      map[key].credit += tx.amount;
    } else {
      map[key].debit += tx.amount;
    }
  });

  // Ensure chronological order
  return Object.entries(map)
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([, value]) => value);
})();