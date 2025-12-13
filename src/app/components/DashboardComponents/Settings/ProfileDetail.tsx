"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { Edit, CopyIcon, CheckIcon } from "lucide-react"
import user_pic from '../../../../../public/assets/user-pic.jpg'



export default function ProfileDetail() {
  const [profilePic, setProfilePic] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle clicking file input
  const handleFileInput = () => {
    fileInputRef.current?.click();
  };

  // Handle image selection and preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setProfilePic(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="">
      <p className="text-slate-500 mb-7">PROFILE DETAILS</p>
      <div className="flex gap-10 p-5 bg-[#3e3e3ea1] rounded-3xl">
        {/* Picture */}
        <div className="w-[200px] h-[200px] rounded-2xl relative overflow-hidden image_container">
          <Image
            src={profilePic || user_pic}
            alt="Chioma"
            className="object-cover"
            fill
            unoptimized
          />
          <div className="w-full h-1/2 bg-[#00000022] absolute bottom-0 left-0 flex items-center justify-center edit_modal">
            <button
              onClick={handleFileInput}
              className="flex flex-col items-center cursor-pointer"
            >
              <Edit size={14} />
              <p className="text-[13px]">Change profile image</p>
            </button>
            <input
              type='file'
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
            />
          </div>
        </div>

        {/* Profile */}
        <div>
          <div className="mb-3.5">
            <p className="text-[13px] tracking-widest text-[#b81c1c]">NAME</p>
            <p className="">Chiamaka Nwafor</p>
          </div>
          <div className="mb-3.5">
            <p className="text-[13px] tracking-widest text-[#b81c1c]">ACCOUNT NUMBER</p>
            <div className="flex items-center gap-2.5">
              <p className="">0101010101</p>
              <div className="flex items-center gap-2.5">
                <CopyIcon size={14} className="cursor-pointer" />
                <CheckIcon size={14} color={'green'} />
                <p className="text-[13px]">Copied</p>
              </div>
            </div>
          </div>
          <div className="mb-3.5">
            <p className="text-[13px] tracking-widest text-[#b81c1c]">ACCOUNT TYPE</p>
            <div className="flex gap-1.5">
              <p className="">Premium</p>
              <div></div>
            </div>
          </div>
          {/* KTC LEVEL */}
          <div className="mb-3.5">
            <p className="text-[13px] tracking-widest text-[#b81c1c] mb-2.5">KYC LEVEL</p>
            <div className="flex items-center mb-1">
              <div className="bg-[#b81c1c] flex items-center justify-center rounded-full p-1">
                <CheckIcon size={10} color={'black'} />
              </div>
              <div className="w-[140px] py-[0.8px] bg-[#b81c1c]"></div>
              <div className="bg-[#b81c1c] flex items-center justify-center rounded-full p-1">
                <CheckIcon size={10} color={'black'} />
              </div>
              <div className="w-[140px] py-[0.8px] bg-[#b81c1c]"></div>
              <div className="bg-[#b81c1c] flex items-center justify-center rounded-full p-1">
                <CheckIcon size={10} color={'black'} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[11px]">LV1</p>
              <p className="text-[11px]">LV2</p>
              <p className="text-[11px]">LV3</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}