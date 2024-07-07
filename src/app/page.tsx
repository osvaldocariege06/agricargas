import AboutUs from '@/components/AboutUs'
import Citation from '@/components/Citation'
import FAQ from '@/components/FAQ'
import Feedbacks from '@/components/Feedbacks'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import OurProdutcs from '@/components/OurProdutcs'
import Partners from '@/components/Partners'
import Statistics from '@/components/Statistics'
import Subscriber from '@/components/Subscriber'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <OurProdutcs />
      <Statistics />
      <Citation />
      <Partners />
      <Subscriber />
      <Feedbacks />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  )
}
