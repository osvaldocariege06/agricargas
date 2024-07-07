'use client'
import { Plus } from 'lucide-react'
import React, { useState } from 'react'

interface IFaqs {
  text: string
  description: string
}

export function Faqs({ text, description }: IFaqs) {
  const [touch, setTouch] = useState<boolean>(false)

  return (
    <div className="">
      <div className="mb-4">
        <button
          onClick={() => setTouch(!touch)}
          className={`-center flex gap-2 transition-all active:scale-95 ${touch && 'text-[#57AC49]'}`}
        >
          <Plus fill="red" fontWeight={'bold'} />
          <span className="font-mochiyPop text-base">{text}</span>
        </button>
        {touch && (
          <p className="ml-8 mt-3 max-w-[375px] text-zinc-400">{description}</p>
        )}
      </div>
    </div>
  )
}
