"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import StackCards from "@/app/svg/StackCards";

export default function Hero() {
  const outerSpin = useRef<HTMLDivElement>(null);
  const innerSpin = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none", duration: 10 }})
    // Rotate anti-clockwise
    if(outerSpin.current) {
      gsap.to(outerSpin.current, {
        rotation: -360,
        duration: 10,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%"
      })
    };

    // Rotate clockwise
    if(innerSpin.current) {
      gsap.to(innerSpin.current, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%"
      })
    }
  }, [])

  return(
    <section className="flex items-center pt-28 justify-between">
      <div>
        <h1 className="text-7xl font-bold leading-24 tracking-wider mb-6">Smarter banking<br />starts here</h1>
        <p className="text-lg mb-6">Send money, pay bills, save smarter,<br/>and stay in control of your finances all from one powerful app</p>
        <div className="flex flex-col md:flex-row gap-6">
          <button className="w-[180px] text-[15px] border py-2.5 cursor-pointer">Create Free Account</button>
          <button className="w-[180px] text-[15px] border py-2.5 cursor-pointer">Download the App</button>
        </div>
      </div>
      <div className="relative w-[500px] h-[500px] overflow-hidden">
        <div
          ref={outerSpin}
          className="absolute inset-0 border-2 border-dashed border-white rounded-full p-7"
        />
        <div
          ref={innerSpin}
          className="absolute inset-7 border border-dashed border-white rounded-full flex items-center justify-center"
        >
          <StackCards />
        </div>
      </div>
    </section>
  )
}