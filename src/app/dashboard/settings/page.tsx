"use client"
import { useRef, useState } from "react"
import Image from "next/image"
import { Edit } from "lucide-react"
import user_pic from '../../../../public/assets/user-pic.jpg'
import ProfilePic from "@/app/components/DashboardComponents/Settings/ProfilePic"
import ProfileInfo from "@/app/components/DashboardComponents/Settings/ProfileInfo"



export default function Settings() {
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
    <div className="py-5">
      <div className="bg-[#3e3e3e82] p-5 mb-9 rounded-3xl">
        <p className="text-3xl">Settings</p>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-9">
          <ProfilePic />
          <ProfileInfo />
        </div>
        <div></div>
      </div>
    </div>
  )
}