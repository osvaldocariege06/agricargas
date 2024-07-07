import React from 'react'
import { ArrowRightIcon } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="flex items-end justify-between py-28 max-w-[1113px] w-full mx-auto">
      <div className="">
        <h2 className="text-[#57AC49] font-bold text-xl uppercase">
          01. AboutUs
        </h2>
        <p className="font-mochiyPop text-[40px] max-w-[494px] w-full">
          helping people to live better than before.
        </p>
      </div>

      <div className="">
        <p className="max-w-[550px] w-full text-zinc-400 text-base mb-4">
          Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time. Use our built-in
          of your Krypto portfolio over time.
        </p>
        <span className="text-[#57AC49] flex gap-1 active:scale-95 transition-all cursor-pointer">
          Learn more
          <ArrowRightIcon color="#00cc00" />
        </span>
      </div>
    </div>
  )
}
