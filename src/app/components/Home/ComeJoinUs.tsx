export default function ComeJoinUs () {
  return(
    <div className="overflow-hidden bg-[#460b0b] h-[270px] flex items-center relative">
      <div className="w-[95%] h-[400px] mx-auto bg-[#721010] blur-sm rounded-full">
        <div className="w-[90%] h-[400px] mx-auto bg-[#8d1414] blur-sm rounded-full">
          <div className="w-[85%] h-[400px] mx-auto bg-[#bb1414] blur-sm rounded-full">
            <div className="w-[80%] h-[400px] mx-auto bg-[#e41a1a] blur-sm rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0">
        <p className="w-[790px] text-5xl text-center font-bold leading-16 mb-9">Over 3 <span className="text-black">million</span> people trust us with their <span className="text-black">business finance</span></p>
        <button className="w-[160px] bg-black text-white py-2.5 rounded-md cursor-pointer">Come Join Us</button>
      </div>
    </div>
  )
}