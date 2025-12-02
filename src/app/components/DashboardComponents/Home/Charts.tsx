import BarChart from "./Barchart";
import SavingsRate from "./SavingsRate";

export default function Charts() {
  return (
    <div className="w-full flex items-cente gap-5">
      <BarChart />
      <SavingsRate />
    </div>
  )
}