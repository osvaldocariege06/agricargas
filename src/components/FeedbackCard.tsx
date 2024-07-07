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
    <div className="relative h-[263px] w-[356px] bg-zinc-100 px-6">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="absolute -top-11 left-[32px]"
      />
      <p className="mt-24 text-base font-bold">{name}</p>
      <p className="mt-[6px] text-sm text-zinc-400">{description}</p>

      <div className="mt-[46px] flex w-full items-center justify-end">
        <Image src={VectorGreen} alt={name} width={20} height={14} />
      </div>
    </div>
  )
}
