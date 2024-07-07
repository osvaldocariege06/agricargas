import { Vector, citation01, citation02 } from '@/assets'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Citation() {
  return (
    <div className="px-40 py-28">
      <h2 className="text-[#57AC49] font-bold text-xl uppercase">
        03. CITATION
      </h2>
      <h3 className="text-[40px] font-mochiyPop max-w-[496px]">
        Discover the benefits of working with us
      </h3>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-2">
            <Image
              src={Vector}
              alt="Vetor"
              width={24}
              height={24}
              className="pb-4"
            />
            <p className="font-mochiyPop text-xl max-w-[386px]">
              We offer you quality work, safety and comfort in producing your
              products.
            </p>
          </div>
          <p className="text-base font-normal text-zinc-400 max-w-[350px] ml-8">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <span className="text-[#57AC49] flex gap-1 active:scale-95 transition-all cursor-pointer ml-8">
            Learn more
            <ArrowRightIcon color="#00cc00" />
          </span>
        </div>

        <div className="flex gap-6">
          <Image
            src={citation01}
            alt="01.Citation image"
            className="rounded w-[357px] h-[455px] shadow"
          />
          <div className="mt-8">
            <p className="text-[13px] max-w-[254px] w-full font-normal text-zinc-400">
              Building the future through technology with agriculture.
            </p>
            <Image
              src={citation02}
              alt="02.Citation image"
              className="mt-[72px] w-[265px] h-[337px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
