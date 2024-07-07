import React from 'react'
import { ArrowRightIcon } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="mx-auto flex w-full max-w-[1113px] items-end justify-between py-28">
      <div>
        <h2 className="text-xl font-bold uppercase text-[#57AC49]">
          01. AboutUs
        </h2>
        <p className="w-full max-w-[494px] font-mochiyPop text-[40px]">
          helping people to live better than before.
        </p>
      </div>

      <div className="">
        <p className="mb-4 w-full max-w-[550px] text-base text-zinc-400">
          Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time. Use our built-in
          of your Krypto portfolio over time.
        </p>
        <span className="flex cursor-pointer gap-1 text-[#57AC49] transition-all active:scale-95">
          Learn more
          <ArrowRightIcon color="#00cc00" />
        </span>
      </div>
    </div>
  )
}
