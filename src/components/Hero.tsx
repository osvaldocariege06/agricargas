import React from 'react'
import Header from './Header'
import Button from './Button'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <div className={'w-full h-screen bg-cover bg-center bg-hero-image'}>
      <div className={`w-full h-full hero px-40 flex flex-col justify-center`}>
        <Header />

        <div className="max-w-[589px] w-full">
          <span className="text-[#57AC49] font-medium text-2xl">
            Our Slogan
          </span>
          <h1 className="text-[52px] text-white mb-6">
            Building the future through technology with agriculture.
          </h1>
          <span className="text-slate-200 font-normal">
            Willingness to solve problems presented by farmers.
          </span>
        </div>

        <div className="w-[225px] mt-9">
          <Button color="green" text="know more about us">
            <ArrowRightIcon color="#FFF" />
          </Button>
        </div>
      </div>
    </div>
  )
}
