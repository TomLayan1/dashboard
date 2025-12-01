import { Dispatch, SetStateAction } from 'react'
import { currenciesType } from '@/app/dashboard/page'
import { PiggyBank } from 'lucide-react'
import Income from '@/app/svg/Income';

type IncomeBalancePropsType = {
  selected: currenciesType;
}

export default function IncomeBalance({ selected }: IncomeBalancePropsType) {
  return (
    // <div className='bg-gradient-to-b from-white to-[#b81c1c] rounded-3xl p-[1px]'>
    //   <div className='bg-black rounded-3xl'>
        <div className="w-[48%] bg-[#3e3e3e3f] rounded-3xl p-3.5">
          <div className='flex items-center justify-between mb-9'>
            <div className=''>
              <p className='text-[17px] font-bold'>Income Balance</p>
              <p className='text-[14px] text-[#7a7878]'>9 Sep - 24 Nov 2025</p>
            </div>
            <Income />
          </div>
          <p>{selected?.symbol}854,348.00</p>
        </div>
    //   </div>
    // </div>
  )
}