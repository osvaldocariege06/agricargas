import { VectorGreen } from '@/assets'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IFeedbackCard {
  name: string
  description: string
  image: StaticImageData
}

export default function FeedbackCard({
  name,
  description,
  image,
}: IFeedbackCard) {
  return (
    <div className="relative w-[356px] h-[263px] bg-zinc-100 px-6">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="absolute -top-11 left-[32px]"
      />
      <p className="mt-24 font-bold text-base">{name}</p>
      <p className="text-zinc-400 text-sm mt-[6px]">{description}</p>

      <div className="flex justify-end items-center w-full mt-[46px]">
        <Image src={VectorGreen} alt={name} width={20} height={14} />
      </div>
    </div>
  )
}
