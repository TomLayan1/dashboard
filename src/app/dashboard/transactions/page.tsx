import Transactions from "@/app/components/DashboardComponents/Home/Transactions";
import Image from "next/image";
import background from '../../../../public/assets/transactions-bg.jpg'

export default function Transaction() {
  return(
    <div className="p-5 relative">
      <div className="bg-[#000000d1] fixed w-full h-screen top-0 left-0 bottom-0 -z-20"></div>
      <Image 
        src={background}
        alt="map"
        className="fixed w-full h-screen top-0 left-0 right-0 -z-30"
      />
      <div className="bg-[#3e3e3e3f] p-5 mb-9 rounded-3xl">
        <p className="text-4xl">Transactions</p>
      </div>
      <div className="">
        <Transactions simplified={false} count={200} />
      </div>
    </div>
  )
}