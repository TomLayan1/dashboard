"use client"
import { EditIcon } from "lucide-react"
import { useState } from "react"
import EditInfo from "./EditInfo";

export default function ProfileInfo() {
  const [ edit, setEdit] = useState<boolean>(false);
  return(
    <>
      {/* Edit Info component */}
      {edit && <EditInfo setEdit={setEdit} />}
      <div>
        <p className="text-slate-500 mb-7">PERSONAL INFORMATION</p>
        <div className="p-5 bg-[#3e3e3ea1] rounded-3xl flex flex-col items-center">
          <div className="w-full">
            <div className="mb-3.5">
              <p className="text-[13px] tracking-widest text-[#b81c1c]">PHONE NUMBER</p>
              <p>+2341234567890</p>
            </div>
            <div className="mb-3.5">
              <p className="text-[13px] tracking-widest text-[#b81c1c]">EMAIL</p>
              <p>chiamakanwafor@gmail.com</p>
            </div>
            <div className="mb-3.5 flex items-center justify-between">
              <div>
                <p className="text-[13px] tracking-widest text-[#b81c1c]">Address</p>
                <p>1, Modern Design Avenue </p>
              </div>
              <p className="text-[12px] p-1 bg-green-800 text-green-400 rounded-md">Approved</p>
            </div>
          </div>
          <button 
            onClick={() => setEdit(true)}
            className="self-center-safe cursor-pointer">
            <EditIcon size={19} color="#b81c1c" />
            <p className="text-[#b81c1c] text-sm">Edit</p>
          </button>
        </div>
      </div>
    </>
  )
}