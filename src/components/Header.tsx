import { Logo } from '@/assets'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-40 py-6">
      <Image
        src={Logo}
        alt="Agricargas Logo"
        width={154}
        height={35}
        className="w-[154px] h-[35px]"
      />
      <nav className="flex items-center gap-4">
        <span className="text-white font-medium text-sm cursor-pointer active:scale-95 transition-all">
          Home
        </span>
        <span className="text-white font-medium text-sm cursor-pointer active:scale-95 transition-all flex gap-2 items-center">
          Our products
          <ChevronDown color="#fff" />
        </span>
        <span className="text-white font-medium text-sm cursor-pointer active:scale-95 transition-all flex gap-2 items-center">
          Benefits avaliables to partners
          <ChevronDown color="#fff" />
        </span>
        <span className="text-white font-medium text-sm cursor-pointer active:scale-95 transition-all">
          Partners
        </span>
      </nav>

      <div className="flex gap-3 items-center">
        <span className="text-white font-semibold text-sm cursor-pointer active:scale-95 transition-all flex gap-1 items-center">
          EN
          <ChevronDown color="#fff" />
        </span>
        <Button text="Become a partner" color="green" />
      </div>
    </header>
  )
}
