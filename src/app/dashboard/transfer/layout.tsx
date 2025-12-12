"use client"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (
      <div className="flex h-screen text-white">
        <div className="flex-1 h-full">
          <main className="flex-1 h-full overflow-y-auto re">
            {children}
          </main>
        </div>
      </div>
  );
}