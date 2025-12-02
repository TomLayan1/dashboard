import { transactions } from "@/app/data";

// Total amount that entered the account
export const totalCredits: number = (transactions ?? [])?.filter(transaction => (
  transaction.transaction_type === 'credit'
)).reduce((sum, transaction) => sum + transaction.amount, 0)

// Total amount that has left the account
export const totalDebits: number = (transactions ?? [])?.filter(transaction => (
  transaction.transaction_type === 'debit'
)).reduce((sum, transaction) => sum + transaction.amount, 0)

// Account balance
export const balance: number = totalCredits - totalDebits;

// Growth relative to total incoming funds
export const growth: number = totalCredits === 0 ? 0 : (balance / totalCredits) * 100
