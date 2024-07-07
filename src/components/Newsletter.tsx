import { Email } from '@/assets'
import Image from 'next/image'
import React from 'react'

export default function Newsletter() {
  return (
    <div className="flex h-[340px] w-full flex-col items-center justify-center bg-zinc-100 px-40">
      <h2 className="text-[20px] font-bold uppercase text-zinc-400">
        07. Our Newsletter
      </h2>
      <h1 className="text-[32px] text-[#57AC49]">Let&apos;s Stay in Touch</h1>
      <div className="">
        <div className="mt-[32px] flex w-[550px] items-center justify-between gap-4 rounded bg-white p-2">
          <div className="flex h-full w-full items-center gap-3">
            <Image src={Email} alt="Email" width={24} height={24} />
            <input
              type="email"
              placeholder="Input your email"
              className="h-[48px] w-full focus:border-0"
            />
          </div>
          <button
            type="button"
            className="flex h-[48px] w-[100px] items-center justify-center rounded bg-[#57AC49] text-white transition-all active:scale-95"
          >
            send
          </button>
        </div>
      </div>
    </div>
  )
}
