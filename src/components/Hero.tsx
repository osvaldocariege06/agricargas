import React from 'react'
import Header from './Header'
import Button from './Button'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
  return (
    <div className={'h-screen w-full bg-hero-image bg-cover bg-center'}>
      <div className={`hero flex h-full w-full flex-col justify-center px-40`}>
        <Header />

        <div className="mx-auto w-full max-w-[1113px]">
          <div className="w-full max-w-[589px]">
            <span className="text-2xl font-medium text-[#57AC49]">
              Our Slogan
            </span>
            <h1 className="mb-6 text-[52px] text-white">
              Building the future through technology with agriculture.
            </h1>
            <span className="font-normal text-slate-200">
              Willingness to solve problems presented by farmers.
            </span>
          </div>

          <div className="mt-9 w-[225px]">
            <Button color="green" text="know more about us">
              <ArrowRightIcon color="#FFF" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
