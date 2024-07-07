import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IPartnerCard {
  name: string
  company: string
  image: StaticImageData
}

export default function PartnerCard({ name, company, image }: IPartnerCard) {
  return (
    <div className="relative h-[337px] w-[261px] overflow-hidden rounded transition-all hover:scale-110">
      <Image
        src={image}
        alt="Partners"
        className="absolute bottom-0 left-0 right-0 top-0 z-0"
      />
      <div className="linear-gradient relative z-20 flex h-[337px] w-[261px] flex-col justify-end gap-[2px] p-6">
        <span className="text-xs font-medium text-[#57AC49]">{company}</span>
        <span className="font-mochiyPop text-sm text-white">{name}</span>
      </div>
    </div>
  )
}
