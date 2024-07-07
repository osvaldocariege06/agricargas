import { Vector, citation01, citation02 } from '@/assets'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Citation() {
  return (
    <div className="mx-auto w-full max-w-[1113px] py-28">
      <h2 className="text-[#57AC49 text-xl font-bold uppercase">
        03. CITATION
      </h2>
      <h3 className="max-w-[496px] font-mochiyPop text-[40px]">
        Discover the benefits of working with us
      </h3>

      <div className="w-full items-center justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2">
            <Image
              src={Vector}
              alt="Vetor"
              width={24}
              height={24}
              className="pb-4"
            />
            <p className="max-w-[386px] font-mochiyPop text-xl">
              We offer you quality work, safety and comfort in producing your
              products.
            </p>
          </div>
          <p className="ml-8 max-w-[350px] text-base font-normal text-zinc-400">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <span className="ml-8 flex cursor-pointer gap-1 text-[#57AC49] transition-all active:scale-95">
            Learn more
            <ArrowRightIcon color="#00cc00" />
          </span>
        </div>

        <div className="flex gap-6">
          <Image
            src={citation01}
            alt="01.Citation image"
            className="h-[455px] w-[357px] rounded"
          />
          <div className="mt-8">
            <p className="w-full max-w-[254px] text-[13px] text-zinc-400">
              Building the future through technology with agriculture.
            </p>
            <Image
              src={citation02}
              alt="02.Citation image"
              className="mt-[72px] h-[337px] w-[265]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
