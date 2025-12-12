"use client"
import { useRef } from "react"
import Image from "next/image"
import { Edit } from "lucide-react"
import user_pic from '../../../../public/assets/user-pic.jpg'



export default function Settings() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="py-5">
      <div className="bg-[#3e3e3e82] p-5 mb-9 rounded-3xl">
        <p className="text-3xl">Settings</p>
      </div>

      <div>
        <div className="w-[200px] h-[200px] rounded-2xl relative overflow-hidden image_container">
          <Image
            src={user_pic}
            alt="Chiooma"
            className="w-fit h-full"
          />
          <div className="w-full h-1/2 hover: bg-[#00000022] absolute bottom-0 left-0 flex items-center justify-center edit_modal">
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
              accept="image/png, image/jpeg, image/jpg"
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  )
}