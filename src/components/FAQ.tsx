import React from 'react'
import { Faqs } from './Faqs'

export default function FAQ() {
  return (
    <div className="mx-auto w-full max-w-[1113px] pb-28">
      <h2 className="text-xl font-bold uppercase text-[#57AC49]">06. FAQs</h2>

      <div className="mt-5 flex items-start justify-between">
        <div className="">
          <h2 className="max-w-[416px] font-mochiyPop text-[40px]">
            Frequently asked questions
          </h2>
          <p className="mt-6 max-w-[350px] text-base text-zinc-400">
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
