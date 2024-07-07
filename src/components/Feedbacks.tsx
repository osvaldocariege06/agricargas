import React from 'react'
import { feedback01, feedback02, feedback03 } from '@/assets'
import FeedbackCard from './FeedbackCard'

export default function Feedbacks() {
  return (
    <div className="py-28 max-w-[1113px] w-full mx-auto">
      <h2 className="text-[#57AC49] font-bold text-xl uppercase">
        05. OUR FEEDBACKS
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-20">
        <FeedbackCard
          name="Ana Carolina"
          image={feedback01}
          description="Use our built-in analytics dashboard to pull valuable insights and monitor."
        />
        <FeedbackCard
          name="Benjamin Maiato"
          image={feedback02}
          description="Use our built-in analytics dashboard to pull valuable insights and monitor."
        />
        <FeedbackCard
          name="Crisvan dos Santos"
          image={feedback03}
          description="Use our built-in analytics dashboard to pull valuable insights and monitor."
        />
      </div>
    </div>
  )
}
