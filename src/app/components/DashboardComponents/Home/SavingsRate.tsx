import { growth } from "@/hooks/useTransactionStats"

export default function Growth() {
  // keep it between 0 and 100
  const value = Math.max(0, Math.min(100, growth))
  const angle = (value / 100) * 360 // 0–100% → 0–360deg

  return (
    <div className="w-[25%] bg-[#3e3e3e3f] rounded-3xl p-3.5">
      <p className="mb-5">Savings Rate</p>

      {/* Outer circle with dynamic red arc */}
      <div
        className="w-[200px] h-[200px] mx-auto rounded-full flex items-center justify-center"
        style={{
          background: `conic-gradient(from 0deg, #b81c1c 0deg ${angle}deg, #3e3e3e ${angle}deg 360deg)`,
        }}
      >
        <div className="w-[150px] h-[150px] bg-[#000000] rounded-full flex items-center justify-center">
          <div className="w-full h-full bg-[#3e3e3e71] rounded-full flex items-center justify-center">
            <p className="text-xl">{value.toFixed(0)}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}