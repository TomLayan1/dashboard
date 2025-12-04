"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatDate } from "../../../../../utils/formatDate";

export function MonthlyTransactionsChart() {
  return (
    <div className="w-full h-96 md:h-auto rounded-3xl bg-[#3e3e3e3f] p-6 mb-6 md:mb-0">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="tracking-wide">
          CASH FLOW
        </h2>
        <p className="">
          Monthly Credits vs Debits (2025)
        </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formatDate}
          margin={{ top: 10, right: 24, left: 0, bottom: 25 }}
          barCategoryGap={20}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#3e3e3e3f" />
          <XAxis
            dataKey="month"
            tick={{ fill: "#cbd5f5", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: "#cbd5f5", fontSize: 12 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value: number) =>
              `₦${value.toLocaleString("en-NG")}`
            }
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ff00002c",
              borderRadius: 8,
              border: "1px solid #3e3e3e",
              fontSize: 12,
            }}
            formatter={(value: any, name: string) => [
              `₦${Number(value).toLocaleString("en-NG")}`,
              name === "credit" ? "Credits" : "Debits",
            ]}
          />
          <Legend
            wrapperStyle={{ color: "#e2e8f0", fontSize: 12 }}
            iconType="circle"
          />

          <Bar
            dataKey="credit"
            name="Credits"
            fill="#22c55e"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="debit"
            name="Debits"
            fill="#ef4444"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}