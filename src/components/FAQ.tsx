import React from 'react'
import { Faqs } from './Faqs'

export default function FAQ() {
  return (
    <div className="pb-28 max-w-[1113px] w-full mx-auto">
      <h2 className="text-[#57AC49] font-bold text-xl uppercase">06. FAQs</h2>

      <div className="mt-5 flex justify-between items-start">
        <div className="">
          <h2 className="text-[40px] font-mochiyPop max-w-[416px]">
            Frequently asked questions
          </h2>
          <p className="max-w-[350px] text-zinc-400 text-base mt-6">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.{' '}
          </p>
        </div>

        <div className="">
          <Faqs
            text="Requirements for working with agricargas"
            description="Use our built-in analytics dashboard to pull valuable insights and
            monitor valuable insights and monitor."
          />
          <Faqs
            text="How do we as subscribers earn for our services?"
            description="Use our built-in analytics dashboard to pull valuable insights and
            monitor valuable insights and monitor."
          />
          <Faqs
            text="How does agriculture protect us from scams?"
            description="Use our built-in analytics dashboard to pull valuable insights and
            monitor valuable insights and monitor."
          />
          <Faqs
            text="Is it possible to trust you?"
            description="Use our built-in analytics dashboard to pull valuable insights and
            monitor valuable insights and monitor."
          />
        </div>
      </div>
    </div>
  )
}
