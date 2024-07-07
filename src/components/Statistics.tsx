import React from 'react'

export default function Statistics() {
  return (
    <div className="flex justify-between items-center pb-28 pt-8 max-w-[1113px] w-full mx-auto">
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-[#57AC49] font-mochiyPop text-5xl">
          200,000.00
        </span>
        <span className="text-base font-bold">Total partner farms</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-[#57AC49] font-mochiyPop text-5xl">
          +100,2300
        </span>
        <span className="text-base font-bold">Total people reached</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="text-[#57AC49] font-mochiyPop text-5xl">
          +130,2300
        </span>
        <span className="text-base font-bold">Total satisfied customers</span>
      </div>
    </div>
  )
}
