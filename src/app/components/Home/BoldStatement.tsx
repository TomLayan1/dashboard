import Image from "next/image";

const mastercard = require('../../../../public/assets/mastercard.png');
const verve = require('../../../../public/assets/verve.png');
const visa = require('../../../../public/assets/visa.png');
const paystack = require('../../../../public/assets/paystack.png');

const partners = [
  mastercard,
  verve,
  visa,
  paystack
]

export default function BoldStatement () {
  return (
    <section className="w-full pb-10">
      <div className="w-full flex justify-between pt-24 pb-14">
        <div className="max-w-[200px] flex flex-wrap">
          <div className="bg-[#4d070766] blur-sm w-[100px] h-[100px]"></div>
          <div className="bg-[#4d070766] w-[100px] h-[100px]"></div>
          <div className="bg-[#4d070766] w-[100px] h-[100px]"></div>
          {/* <div className="bg-[#4d070766] blur-sm w-[100px] h-[100px]"></div> */}
        </div>
        <div className="flex-1 container pt-14">
          <h3 className="text-5xl text-center leading-12">A world where <span >finance is free,</span> efficient,<br />and accessible — powered by tovah<br />technology and open to all.</h3>
        </div>
        <div className="max-w-[200px] flex flex-wrap">
          <div className="bg-[#4d070766 blur-sm w-[100px] h-[100px]"></div>
          <div className="bg-[#4d070766] w-[100px] h-[100px]"></div>
          <div className="bg-[#4d070766] w-[100px] h-[100px]"></div>
          <div className="bg-[#4d070766] blur-sm w-[100px] h-[100px]"></div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-center gap-9">
        {partners?.map((partner, i) => (
          <Image
            key={i}
            src={partner}
            alt={`Partner ${i}`}
            className="w-[150px]"
          />
        ))}
      </div>
    </section>
  )
}