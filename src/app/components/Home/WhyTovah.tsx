const REASONS = [
  {
    reason: "Zero-friction onboarding and account activation",
    explain: "Customers can open an account quickly through digital channels with minimal documentation, enabling same-day activation for transfers, bill payments, and savings. This removes traditional barriers and accelerates access to financial services."
  },
  {
    reason: "Free transaction costs and smarter payment options",
    explain: "Your bank offers competitive fees on inter-bank transfers, airtime/data purchases, and recurring payments, supported by USSD, mobile app, and card services. This helps customers retain more of their funds while transacting conveniently across multiple platforms."
  },
  {
    reason: "Interest-bearing savings and tailored financial growth tools",
    explain: "Account holders gain access to structured savings plans, fixed deposits, and other yield-generating products designed for individuals and small businesses. This allows customers to grow idle funds and build long-term financial resilience."
  },
  {
    reason: "Trusted security and regulatory compliance",
    explain: "Your bank employs multi-layer fraud protection, encrypted digital banking, BVN integration, and adherence to CBN regulations. Customers can bank with confidence knowing their money and personal data are protected by a licensed, supervised institution."
  }  
]
export default function WhyTovah() {
  return(
    <section className="flex gap-10 py-16">
      <div className="w-[260px]">
        <h2 className="text-3xl tracking-widest leading-12 mb-5">Why you should get a Tovah <span className="text-[#b81c1c]">free account</span></h2>
        <button className="bg-[#b81c1c] w-[150px] font-bold py-2.5 rounded-md cursor-pointer">Get started</button>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-8">
        {REASONS?.map((reason, i) => (
          <div key={i} className="bg-[#222121a1] rounded-2xl p-4">
            <p className="text-2xl font-bold leading-8 mb-5">{reason.reason}</p>
            <p className="text-[15px] leading-6">{reason.explain}</p>
          </div>
        ))}
      </div>
    </section>
  )
}