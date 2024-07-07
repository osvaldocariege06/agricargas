import React, { ReactNode } from 'react'
import { ArrowRight } from '@/assets'
import Image from 'next/image'

interface IProductCard {
  fruit: string
  children: ReactNode
  theme?: 'light' | 'dark'
  size?: 'medium' | 'large'
}

export default function ProductCard({
  fruit,
  children,
  theme,
  size,
}: IProductCard) {
  return (
    <div
      className={`relative ${size === 'large' ? 'w-[550px]' : 'w-[265px]'} h-[346px] rounded p-5 ${theme === 'dark' ? 'bg-[#2C2C2C]' : 'bg-zinc-100'}`}
    >
      <span
        className={`font-normal ${theme === 'dark' ? 'text-zinc-400' : 'bg-zinc-100'}`}
      >
        We import
      </span>
      <div className="mt-2 flex items-center gap-1">
        <span
          className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-[#57AC49]'}`}
        >
          {fruit}
        </span>
        <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#57AC49]">
          <Image src={ArrowRight} alt="ArrowRight" />
        </span>
      </div>
      {children}
    </div>
  )
}
