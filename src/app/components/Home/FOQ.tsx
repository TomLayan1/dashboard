"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react";

const FOQS = [
  {
    id: 1,
    question: "What do I need to open an account?",
    answer: "Phone number, BVN, and a valid ID."
  },
  {
    id: 2,
    question: "How long does it take?",
    answer: "2–10 minutes. Usually instant activation."
  },
  {
    id: 3,
    question: "Is there a minimum balance?",
    answer: "Yes. ₦0 – 1,000 for most digital savings accounts."
  },
  {
    id: 4,
    question: "Can I receive money instantly?",
    answer: "Yes. Within seconds (via NIP)."
  },
  {
    id: 5,
    question: "Is my money safe?",
    answer: "Yes. Encrypted and CBN-compliant. NDIC insured."
  },
  {
    id: 6,
    question: "Can I open an account without a branch visit?",
    answer: "Yes. Fully online via app/USSD/web."
  }
]


export default function FOQ() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null)

  FOQS?.sort((a, b) => a.id - b.id);

  const handleFaq = (id: number) => {
    setShowAnswer(prev => prev === id ? null : id)
  }
  return(
    <section className="w-full py-16">
      <p className="text-4xl text-[#b81c1c] text-center font-bold mb-14">Frequently Asked Questions</p>
      <div className="w-[60%] mx-auto flex flex-col gap-4">
        {FOQS?.map(foq => (
          <div key={foq.id} className={`w-full ${showAnswer === foq.id ?'h-[120px]' : 'h-[60px]'} rounded-xl overflow-hidden`}>
            <button onClick={() => handleFaq(foq.id)} className={`bg-[#222121a1] w-full ${showAnswer === foq.id ?'h-1/2' :'h-full'} flex p-4 cursor-pointer`}>
              <div className="flex-1">
                <p className="text-xl text-left">{foq.question}</p>
              </div>
              {showAnswer === foq.id ? <ChevronUp color="#b81c1c" /> : <ChevronDown color="#b81c1c" />}
            </button>
            <div className={`bg-[#3f3d3da1] w-full ${showAnswer === foq.id ? 'h-1/2' : 'h-0'} p-4 overflow-hidden`}>
              <p className="text-[15px]">{foq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}