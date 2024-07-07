import { Email } from '@/assets'
import Image from 'next/image'
import React from 'react'

export default function Newsletter() {
  return (
    <div className="px-40 flex flex-col justify-center items-center h-[340px] w-full bg-zinc-100">
      <h2 className="text-zinc-400 uppercase text-[20px] font-bold">
        07. Our Newsletter
      </h2>
      <h1 className="text-[32px] text-[#57AC49]">Let&apos;s Stay in Touch</h1>
      <div className="">
        <div className="flex items-center justify-between gap-4 bg-white p-2 rounded w-[550px] mt-[32px]">
          <div className="flex items-center gap-3 w-full h-full">
            <Image src={Email} alt="Email" width={24} height={24} />
            <input
              type="email"
              placeholder="Input your email"
              className="w-full h-[48px] focus:border-0"
            />
          </div>
          <button
            type="button"
            className="w-[100px] h-[48px] bg-[#57AC49] flex justify-center items-center text-white rounded active:scale-95 transition-all"
          >
            send
          </button>
        </div>
      </div>
    </div>
  )
}
