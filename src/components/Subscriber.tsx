import React from 'react'
import Button from './Button'
import { ArrowRightIcon } from 'lucide-react'

export default function Subscriber() {
  return (
    <div className="bg-image-subscriber bg-repeat object-contain bg-center  p-40 w-full h-[955px]">
      <div className="w-[508px] h-[396px] bg-[#57AC49] rounded p-[42px]">
        <span className="text-2xl font-medium">Subscriber</span>
        <h2 className="text-white text-[32px] font-mochiyPop max-w-[402px]">
          Sign up as our partner and start selling
        </h2>
        <p className="text-zinc-100 mt-4">
          Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time.
        </p>

        <div className="w-[215px] mt-7">
          <Button color="white" text="become a partner">
            <ArrowRightIcon color="#57AC49" />
          </Button>
        </div>
      </div>
    </div>
  )
}
