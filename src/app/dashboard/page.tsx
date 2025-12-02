"use client"
import { useState } from "react";
import Balance from "@/app/components/DashboardComponents/Home/Balance";
import Navbar from "../components/DashboardComponents/Navbar";
import IncomeSpendingBalance from "@/app/components/DashboardComponents/Home/IncomeSpendingBalance";

import nigeria from '../../../public/assets/nigeria.jpg'
import america from '../../../public/assets/america.jpg'
import britain from '../../../public/assets/britain.jpg'
import Charts from "@/app/components/DashboardComponents/Home/Charts";

export interface currenciesType {
  name: string;
  symbol: string;
  rate: number;
  flag: any;
}

export const currencies: currenciesType[] = [
  {
    name: "NGN",
    symbol: "₦",
    rate: 1,
    flag: nigeria
  },
  {
    name: "USD",
    symbol: "$",
    rate: 1444.46,
    flag: america
  },
  {
    name: "GBP",
    symbol: "£",
    rate: 1912.44,
    flag: britain
  }
]

export default function HomeMain() {
  const [selected, setSelected] = useState(currencies[0]);

  return (
    <div className="w-full h-full container mx-auto text-white">
      <Navbar />
      <div className="p-5">
        <div>
          <div className="flex items-baseline gap-5 mb-9">
            <div className="w-[34%]">
              <Balance currencies={currencies} selected={selected} setSelected={setSelected} />
            </div>
            <IncomeSpendingBalance selected={selected} />
          </div>
          {/* Chart */}
          <Charts />
        </div>
      </div>
    </div>
  )
}