import { Dispatch, SetStateAction } from 'react'
import { currenciesType } from '@/app/dashboard/page'
import { PiggyBank } from 'lucide-react'
import Spending from '@/app/svg/Spending';

type SpendingBalancePropsType = {
  selected: currenciesType;
}

export default function SpendingBalance({ selected }: SpendingBalancePropsType) {
  return (
    // <div className='bg-gradient-to-b from-white to-[#b81c1c] rounded-3xl p-[1px]'>
    //   <div className='bg-black rounded-3xl'>
        <div className="w-[49%] bg-[#3e3e3e3f] rounded-3xl p-3.5">
      <div className='flex items-center  justify-between mb-9'>
            <div className=''>
              <p className='text-[17px] font-bold'>Spending Balance</p>
              <p className='text-[14px] text-[#7a7878]'>9 Sep - 24 Nov 2025</p>
            </div>
            <Spending />
          </div>
          <p>{selected?.symbol}777,455.00</p>
        </div>
    //   </div>
    // </div>
  )
}