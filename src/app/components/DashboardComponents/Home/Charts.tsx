import { MonthlyTransactionsChart } from "./MonthlyTransactionsChart";
import SavingsRate from "./SavingsRate";

export default function Charts() {
  return (
    <div className="w-full md:flex items-cente gap-5">
      <MonthlyTransactionsChart />
      <SavingsRate />
    </div>
  )
}