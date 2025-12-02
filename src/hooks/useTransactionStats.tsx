import { transactions } from "@/app/data";

export const totalCredits = transactions?.filter(transaction => (
  transaction.transaction_type === 'credit'
)).reduce((sum, transaction) => sum + transaction.amount, 0)

export const totalDebits = transactions?.filter(transaction => (
  transaction.transaction_type === 'debit'
)).reduce((sum, transaction) => sum + transaction.amount, 0)

export const balance = totalCredits - totalDebits;
console.log('Balance', balance)

// Growth relative to total incoming funds
export const growth = (totalCredits / totalDebits) * 100
console.log('Growth: ', growth,'%')