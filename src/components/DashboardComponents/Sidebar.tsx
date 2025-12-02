"use client"
import { Home, Wallet, List, Send, CreditCard, DollarSign, BarChart2, Lock, Settings, HelpCircle, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type SidebarPropsType = {
  getActiveState: () => "/dashboard" | "/dashboard/transfer" | "/dashboard/settings" | "" | "/dashboard/transaction"
}

export const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  // { name: "Accounts", href: "/dashboard/accounts", icon: Wallet },
  { name: "Transfers", href: "/dashboard/transfer", icon: Send },
  { name: "Transactions", href: "/dashboard/transactions", icon: List },
  // { name: "Payments & Bills", href: "/dashboard/payments", icon: CreditCard },
  // { name: "Loans", href: "/dashboard/loans", icon: DollarSign },
  // { name: "Investments", href: "/dashboard/investments", icon: BarChart2 },
  // { name: "Cards", href: "/dashboard/cards", icon: CreditCard },
  // { name: "Security", href: "/dashboard/security", icon: Lock },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  // { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  // { name: "Logout", href: "/dashboard/logout", icon: LogOut },
];

export default function Sidebar() {
  const [currentPage, setCurrentPage] = useState<string>("Dashboard")
  const handleCurrentLink = (name: string) => {
    const current = sidebarLinks?.find(link => link.name === name);
    current && setCurrentPage(current.name)
  }

  return(
    <div className='bg-[#b81c1c] w-[220px] h-screen py-4 flex flex-col items-start justify-between'>
      <div className='w-full px-2'>
        {/* Logo */}
        <div>
          
          <div className='bg-black w-[50px] h-[50px] p-2. rounded-full flex flex-col justify-center mb-9'>
            <h1 className='text-2xl ml-2.5'>Tovah</h1>
          </div>
        </div>

        {/* Links */}
        <div className='w-full flex flex-col'>
          {sidebarLinks?.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => handleCurrentLink(link.name)}
                className={`w-full px-4 py-2 rounded-full flex items-center gap-2 ${currentPage === link.name ? 'bg-black' : ''}`}
              >
                <link.icon size={17} />
                <p className='text-[14px]'>{link.name}</p>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Sign out button */}
      <div className='flex items-center gap-2'>
        <button className='ml-4 text-[15px] cursor-pointer font-bold'>Sign out</button>
        <LogOut size={17} />
      </div>
    </div>
  )
}