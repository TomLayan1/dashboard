"use client"
import Sidebar from "@/components/Sidebar";

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
        <div className="flex-1">
          <main className="flex-1 overflow-y-auto bg-[var(--dashboard-bg)]">
            {children}
          </main>
        </div>
      </div>
  );
}