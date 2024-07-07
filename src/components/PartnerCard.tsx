import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IPartnerCard {
  name: string
  company: string
  image: StaticImageData
}

export default function PartnerCard({ name, company, image }: IPartnerCard) {
  return (
    <div className="relative w-[261px] h-[337px] rounded overflow-hidden hover:scale-110 transition-all">
      <Image
        src={image}
        alt="Partners"
        className="absolute z-0 top-0 left-0 bottom-0 right-0"
      />
      <div className="relative z-20 linear-gradient w-[261px] h-[337px] flex flex-col gap-[2px] justify-end p-6">
        <span className="text-[#57AC49] font-medium text-xs">{company}</span>
        <span className="font-mochiyPop text-sm text-white">{name}</span>
      </div>
    </div>
  )
}
