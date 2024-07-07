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
      <div className="flex items-center gap-1 mt-2">
        <span
          className={`font-bold text-base ${theme === 'dark' ? 'text-white' : 'text-[#57AC49]'}`}
        >
          {fruit}
        </span>
        <span className="w-[17px] h-[17px] flex justify-center items-center rounded-full bg-[#57AC49]">
          <Image src={ArrowRight} alt="ArrowRight" />
        </span>
      </div>
      {children}
    </div>
  )
}
