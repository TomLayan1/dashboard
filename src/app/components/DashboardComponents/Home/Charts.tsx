import { MonthlyTransactionsChart } from "./MonthlyTransactionsChart";
import SavingsRate from "./SavingsRate";

export default function Charts() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-cente gap-5">
      <MonthlyTransactionsChart />
      <SavingsRate />
    </div>
  )
}