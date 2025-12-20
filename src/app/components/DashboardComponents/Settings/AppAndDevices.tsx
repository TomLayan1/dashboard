import {
  PhoneIcon,
  Bell,
  Shield,
  PaintRoller,
  ChevronRight,
} from "lucide-react"

export default function AppAndDevices() {
  return (
    <div>
      <p className="text-slate-500 mb-7">APP & DEVICES</p>
      <div className=" flex flex-col gap-5. p-3 bg-[#3e3e3ea1] rounded-3xl">
        <div className="flex items-center justify-between p-3 cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <Shield size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Consent Request</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>

        <div className="flex items-center justify-between p-3 cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <PhoneIcon size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Change Password</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>

        <div className="flex items-center justify-between p-3 cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <Bell size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Notifications</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>

        <div className="flex items-center justify-between p-3 cursor-pointer rounded-md hover:bg-[#3e3e3ecf] duration-200 ease-in-out">
          <div className="flex items-center gap-5">
            <div className="bg-[#3e3e3ecf] flex items-center justify-center py-1.5 px-1.5 rounded-md">
              <PaintRoller size={15} color="#b81c1c" />
            </div>
            <p className="text-[15px]">Theme</p>
          </div>
          <ChevronRight size={15} color="#b81c1c" />
        </div>
      </div>
    </div>
  )
}