"use client"
import { useRef, useState } from "react"
import ProfileInfo from "@/app/components/DashboardComponents/Settings/ProfileInfo"
import ProfileDetail from "@/app/components/DashboardComponents/Settings/ProfileDetail"
import SecurityAndPrivacy from "@/app/components/DashboardComponents/Settings/SecurityAndPrivacy"
import AppAndDevices from "@/app/components/DashboardComponents/Settings/AppAndDevices"



export default function Settings() {
  return (
    <div className="py-5">
      <div className="bg-[#3e3e3e82] p-5 mb-9 rounded-3xl">
        <p className="text-3xl">Settings</p>
      </div>

      <div className="flex gap-8">
        <div className="w-1/2 flex flex-col gap-9">
          <ProfileDetail />
          <ProfileInfo />
        </div>
        <div className="w-1/2 flex flex-col gap-9">
          <SecurityAndPrivacy />
          <AppAndDevices />
        </div>
      </div>
    </div>
  )
}