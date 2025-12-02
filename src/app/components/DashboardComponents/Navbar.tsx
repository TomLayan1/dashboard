import { Bell, Search } from 'lucide-react'
import user_pics from '../../../../public/assets/user-pic.jpg'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="w-full px-5 py-4 flex items-center justify-between">
      {/* Search */}
      <div className='w-[300px] flex items-center border-[1px] rounded-lg'>
        <input
          type='text'
          placeholder='Search'
          className='flex-1 text-[14px] p-2 outline-0'
        />
        <div className="w-[10%] flex items-center justify-center">
          <Search size={20} />
        </div>
      </div>

      <div className='flex items-center gap-3.5'>
        {/* Notification */}
        <div className='flex items-center gap-3.5 relative'>
          <Bell />
          <div className='bg-green-700 w-2.5 h-2.5 rounded-full absolute top-0 right-1'></div>
        </div>

        {/* User */}
        <div className='flex items-center gap-2.5'>
          <div className='w-[40px] h-[40px]'>
            <Image
              src={user_pics}
              alt="user-name"
              className='w-fit h-full rounded-full'
            />
          </div>
          <div>
            <p className='text-[#b81c1c] font-bold'>Chiamaka Nwafor</p>
            <p className='text-[#7a7878]'>Premium user</p>
          </div>
        </div>
      </div>
    </div>
  )
}