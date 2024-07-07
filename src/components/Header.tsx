import { Logo } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 mx-auto flex w-full max-w-[1113px] items-center justify-between py-6">
      <Image
        src={Logo}
        alt="Agricargas Logo"
        width={154}
        height={35}
        className="h-[35px] w-[154px]"
      />
      <nav className="flex items-center gap-4">
        <span className="cursor-pointer text-sm font-medium text-white transition-all active:scale-95">
          Home
        </span>
        <span className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-all active:scale-95">
          Our products
          <ChevronDown color="#fff" />
        </span>
        <span className="flex cursor-pointer items-center gap-2 text-sm font-medium text-white transition-all active:scale-95">
          Benefits avaliables to partners
          <ChevronDown color="#fff" />
        </span>
        <span className="cursor-pointer text-sm font-medium text-white transition-all active:scale-95">
          Partners
        </span>
      </nav>

      <div className="flex items-center gap-3">
        <span className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-white transition-all active:scale-95">
          EN
          <ChevronDown color="#fff" />
        </span>
        <Button text="Become a partner" color="green" />
      </div>
    </header>
  )
}
