import { Dispatch, SetStateAction } from 'react'
import IncomeBalance from "./IncomeBalance";
import SpendingBalance from "./SpendingBalance";
import { currenciesType } from '@/app/dashboard/page'
import TransactionPreview from './TransactionPreview';


type IncomeSpendingBalancePropsType = {
    selected: currenciesType;
}

export default function IncomeSpendingBalance({ selected }: IncomeSpendingBalancePropsType) {
  return(
    <div className="flex-1">
      <div className="w-full flex items-center justify-between mb-5">
        <IncomeBalance selected={selected} />
        <SpendingBalance selected={selected} />
      </div>
      <TransactionPreview />
    </div>
  )
}