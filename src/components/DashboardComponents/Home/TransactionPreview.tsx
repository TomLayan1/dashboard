import { transactions } from "@/app/data";
import Income from '@/app/svg/Income';
import Spending from '@/app/svg/Spending';
import Link from "next/link";


export default function TransactionPreview() {
  return (
    <div className="bg-[#3e3e3e3f] rounded-3xl p-3">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[15px]">Transaction</p>
        <Link href={""} className="text-[15px] cursor-pointer">See all</Link>
      </div>
      {transactions?.map(transaction => (
        <div key={transaction.id} className={`grid grid-cols-3 border-b py-1 px-2`}>
          <p className="text-[14px]">{transaction.name}</p>
          <p className="text-[14px]">{transaction.date}</p>
          {transaction.transaction_type === 'credit' ? <Income /> : <Spending />}
        </div>
      ))}
    </div>
  )
}