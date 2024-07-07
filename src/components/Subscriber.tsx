import React from 'react'
import Button from './Button'
import { ArrowRightIcon } from 'lucide-react'

export default function Subscriber() {
  return (
    <div className="h-[955px] w-full bg-image-subscriber bg-center object-cover p-40">
      <div className="mx-auto w-full max-w-[1113px]">
        <div className="h-[396px] w-[508px] rounded bg-[#57AC49] p-[42px]">
          <span className="text-2xl font-medium">Subscriber</span>
          <h2 className="max-w-[402px] font-mochiyPop text-[32px] text-white">
            Sign up as our partner and start selling
          </h2>
          <p className="mt-4 text-zinc-100">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.{' '}
          </p>

          <div className="mt-7 w-[215px]">
            <Button color="white" text="become a partner">
              <ArrowRightIcon color="#57AC49" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
