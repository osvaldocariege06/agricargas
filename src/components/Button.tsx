import React, { ReactNode } from 'react'

interface IButton {
  children?: ReactNode
  text: string
  color: 'green' | 'white'
}

export default function Button({ children, text, color }: IButton) {
  return (
    <button
      className={`h-12 ${color === 'green' ? 'bg-[#57AC49]' : 'bg-white'} rounded flex items-center justify-center gap-3 w-full px-3 py-[10px] shadow active:scale-95 ${color === 'green' ? 'hover:bg-green-700/80' : 'bg-slate-300/60'} transition-all`}
    >
      <span
        className={`${color === 'green' ? 'text-white' : 'text-[#57AC49]'}`}
      >
        {text}
      </span>
      {children}
    </button>
  )
}
