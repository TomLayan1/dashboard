import BarChart from "./Barchart";
import Growth from "./Growth";

export default function Charts() {
  return (
    <div className="w-full flex items-cente gap-5">
      <BarChart />
      <Growth />
    </div>
  )
}