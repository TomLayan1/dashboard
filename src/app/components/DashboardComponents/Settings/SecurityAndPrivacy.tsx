import { 
  ChevronRight,
  LockIcon,
  Fingerprint,
  EyeOffIcon, 
} from "lucide-react"

export default function SecurityAndPrivacy() {
  return(
    <div>
      <p className="text-slate-500 mb-7">SECURITY AND PRIVACY</p>
      <div className="w-full flex flex-col px-3 py-3 bg-[#3e3e3ea1] rounded-3xl">
        <div className="flex items-center justify-between px-3 py-1.5 cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center rounded-md">
              <LockIcon size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Change Password</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>
        <div className="flex items-center justify-between px-3 py-[12.2px] cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <LockIcon size={15} color="#b81c1c" />
            </div>
            <div>
              <p className="text-[15px]">Reset User PIN</p>
              <p className="text-[13px] text-slate-400">For authorising transaction on mobile and web app</p>
            </div>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>
        <div className="flex items-center justify-between px-3 py-[12.2px] cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <ChevronRight size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Login Options</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>
        <div className="flex items-center justify-between px-3 py-[12.2px] cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <Fingerprint size={15} color="#b81c1c" />
            </div>
            <div>
              <p className="text-[15px]">Reset User PIN</p>
              <p className="text-[13px] text-slate-400">For authorising transaction on mobile and web app</p>
            </div>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>
        <div className="flex items-center justify-between px-3 py-[12.2px] cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <EyeOffIcon size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Hide Balance</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>
      </div>
    </div>
  )
}