import { currenciesType } from '@/app/dashboard/page'
import Income from '@/app/svg/Income';
import { totalCredits } from '@/hooks/useTransactionStats';

type IncomeBalancePropsType = {
  selected: currenciesType;
}

export default function IncomeBalance({ selected }: IncomeBalancePropsType) {
  return (
    <div className="w-[48%] bg-[#3e3e3e3f] rounded-3xl p-3.5">
      <div className='flex items-center justify-between mb-9'>
        <div className=''>
          <p className='text-[16px] font-bold'>Income Balance</p>
          <p className='text-[13px] text-[#7a7878]'>9 Sep - 24 Nov 2025</p>
        </div>
        <Income />
      </div>
      <p className='text-[14px]'>{selected?.symbol}{Number(totalCredits.toFixed(2)).toLocaleString()}</p>
    </div>
  )
}