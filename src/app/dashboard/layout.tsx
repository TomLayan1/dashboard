"use client"
import Sidebar from "../components/DashboardComponents/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  const loading: boolean= false

  if (loading) {
    return (
      <div className="flex h-screen bg-[var(--dashboard-bg)]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 flex items-center justify-center bg-[var(--dashboard-bg)]">
            <div className="text-lg text-white">Loading...</div>
          </main>
        </div>
      </div>
    );
  }


  return (
      <div className="flex h-screen text-white">
      <Sidebar />
        <div className="flex-1 h-full">
          <main className="flex-1 h-full container w-[95%] md:w-[95%] mx-auto overflow-y-auto scrollbar">
            {children}
          </main>
        </div>
      </div>
  );
}