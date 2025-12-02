import { growth } from "@/hooks/useTransactionStats"

export default function Growth() {
  return(
    <div className="w-[25%] bg-[#3e3e3e3f] rounded-3xl p-3.5">
      <p>Growth</p>
      <div className="w-full h-full bg-[linear-gradient(135deg, _#4f46e5, _#ec4899)]">
        <div className="">
          <p>{growth.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}