import React from 'react'

export default function Statistics() {
  return (
    <div className="mx-auto flex w-full max-w-[1113px] items-center justify-between pb-28 pt-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-mochiyPop text-5xl text-[#57AC49]">
          200,000.00
        </span>
        <span className="text-base font-bold">Total partner farms</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-mochiyPop text-5xl text-[#57AC49]">
          +100,2300
        </span>
        <span className="text-base font-bold">Total people reached</span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-mochiyPop text-5xl text-[#57AC49]">
          +130,2300
        </span>
        <span className="text-base font-bold">Total satisfied customers</span>
      </div>
    </div>
  )
}
