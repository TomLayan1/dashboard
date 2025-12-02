import { transactions } from "@/app/data";
import Income from '@/app/svg/Income';
import Spending from '@/app/svg/Spending';
import Link from "next/link";

type TransactionPreviewPropsType = {
  count: number;
  simplified: boolean;
}


export default function Transactions({ simplified, count }: TransactionPreviewPropsType) {
  return (
    <div className="bg-[#3e3e3e3f] rounded-3xl p-3">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[15px]">Transaction</p>
        <Link href={"/dashboard/transactions"} className="text-[15px] cursor-pointer">See all</Link>
      </div>
        <table className="w-full">
          <tbody>
            {transactions?.slice(0, count).map(transaction => (
              <tr className="border-0 border-t border-[#606060]">
                <td className="text-[13px] py-[6.5px]">{transaction.name}</td>
                <td className="text-[13px] py-[6.5px]">{transaction.bank}</td>
                <td className="text-[13px] py-[6.5px]">₦{transaction.amount.toLocaleString()}</td>
                <td className="text-[13px] py-[6.5px]">{transaction.time}</td>
                {transaction.transaction_type === 'credit' ? <Income /> : <Spending />}
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}