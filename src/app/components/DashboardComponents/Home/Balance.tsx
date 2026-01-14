"use client"
import { useState, Dispatch, SetStateAction } from 'react'
import { balance } from '@/hooks/useTransactionStats'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import AtmCard from '../../../svg/AtmCard'
import { currenciesType } from '@/app/dashboard/page'

type BalancePropsType = {
  currencies: currenciesType[];
  selected: currenciesType;
  setSelected: Dispatch<SetStateAction<currenciesType>>
}


export default function Balance({ currencies, selected, setSelected }: BalancePropsType ) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selected, setSelected] = useState(currencies[0]);
  const [showBalance, setShowBalance] = useState<boolean>(false);

  const handleSelect = (item: any) => {
    setSelected(item);
    setIsOpen(false);
  };

  const FinalBalance = balance / selected?.rate;

  return(
    <div className='w-full'>
      <p className="text-xl md:text-2xl lg:text-3xl mb-7">Welcome back, <span className="font-bold">Chiamake!</span></p>
      <div className="w-full bg-[#3e3e3e3f] rounded-3xl relative px-3 pt-3 pb-1.5">
        <div className='flex items-center justify-between mb-2'>
          <p className='text-[17px] font-bold'>Total Balance</p>
          <div className="w-[97px] relative">
            {/* Selected */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between gap- p-1 rounded-md border border-gray-300"
            >
              <Image src={selected.flag} alt={selected.name} width={20} height={30} className="rounded-sm" />
              <p className='text-[13px]'>{selected.name}</p>
              <span className="text-[10px]">▼</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="w-[97px] bg-[#0000006a] absolute left-0 right-0 rounded-md mt-2 shadow-lg max-h-48 overflow-y-auto border border-gray-300 z-10">
                {currencies.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelect(item)}
                    className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-[#b81c1c83]"
                  >
                    <Image src={item.flag} alt={item.name} width={20} height={20} className="rounded-sm" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <div className='flex items-center gap-4 mb-3'>
            <p className={`text-xl font-bold max-w-[230px] transition-all duration-300 ${showBalance ? "blur-0" : "blur-md select-none"}`}>{selected.symbol} {Number(FinalBalance.toFixed(2)).toLocaleString()}</p>
            <div className='cursor-pointer' onClick={() => setShowBalance(!showBalance)}>
              {showBalance ? <EyeOff size={15} /> : <Eye size={15} />}
            </div>
          </div>
          <div className=''>
            {/* ATM Card */}
            <AtmCard />
          </div>
        </div>
      </div>
    </div>
  )
}